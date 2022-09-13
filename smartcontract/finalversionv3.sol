// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract web3wiki {
    string[] public articles;
    mapping(address => uint256[]) public writers_articles;
    mapping(uint256 => mapping(address => uint8)) ownershare; //mapping ownershare articleId to address to share

    constructor() {
        articles.push("0");
        requestd.owner = msg.sender;
        requestd.articleId = 0;
        requests.push(requestd);
    }

    function createarticle(string memory uri) public {
        //new article
        articles.push(uri);
        writers_articles[msg.sender].push(articles.length - 1);
        ownershare[articles.length - 1][msg.sender] = 100;
    }

    function updatearticle(uint256 Id, string memory uri) internal {
        //update content in article
        articles[Id] = uri;
    }

    function ownershiptransfer(
        uint256 articleId,
        address transfer_to,
        uint8 amount
    ) public {
        //transfering an article ownership
        require((articles.length - 1) >= articleId, "article doesn't exist");
        require(
            ownershare[articleId][msg.sender] >= amount,
            "you not have required share"
        );
        if (ownershare[articleId][transfer_to] == 0) {
            writers_articles[transfer_to].push(articleId);
        }
        ownershare[articleId][msg.sender] -= amount;
        ownershare[articleId][transfer_to] += amount;
    }

    struct request {
        //requested changes
        address owner;
        uint256 articleId;
        string uri;
        address[] acceptedaddress;
        uint8 acceptedamount;
    }

    request requestd;
    request[] public requests; //requested changes list
    mapping(uint256 => uint256[]) public articles_to_request;

    function requestchange(uint256 articleId, string memory uri) public {
        require((articles.length - 1) >= articleId, "article doesn't exist");
        if (ownershare[articleId][msg.sender] >= 65) {
            updatearticle(articleId, uri);
        } else {
            requestd.owner = msg.sender;
            requestd.articleId = articleId;
            requestd.uri = uri;
            requestd.acceptedamount = 0;
            requestd.acceptedamount = ownershare[articleId][msg.sender];
            requestd.acceptedaddress.push(msg.sender);
            requests.push(requestd);
            articles_to_request[articleId].push(requests.length - 1);
            requestd.acceptedaddress.pop();
        }
    }

    function voterequest(uint256 requestId) public {
        //upvoting for an update request
        require(requests[requestId].articleId != 0, "request don't exit");
        require(
            ownershare[requests[requestId].articleId][msg.sender] != 0,
            "not a owner"
        );
        for (uint i = 0; requests[requestId].acceptedaddress.length > i; i++) {
            if (requests[requestId].acceptedaddress[i] == msg.sender) {
                revert("already voted");
            }
        }
        requests[requestId].acceptedamount += ownershare[
            requests[requestId].articleId
        ][msg.sender];
        requests[requestId].acceptedaddress.push(msg.sender);
        if (requests[requestId].acceptedamount >= 65) {
            updatearticle(
                requests[requestId].articleId,
                requests[requestId].uri
            );
            uint256[] memory requestlist = articles_to_request[
                requests[requestId].articleId
            ];
            for (uint i = 0; requestlist.length > i; i++) {
                if (requestlist[i] == requestId) {
                    articles_to_request[requests[requestId].articleId][
                        i
                    ] = articles_to_request[requests[requestId].articleId][
                        requestlist.length - 1
                    ];
                    articles_to_request[requests[requestId].articleId].pop();
                    break;
                }
            }
        }
    }

    function articleswriten(address ad) public view returns (uint256[] memory) {
        return writers_articles[ad];
    }

    function articleuri(uint256 id) public view returns (string memory) {
        return articles[id];
    }

    function requestdata(uint256 requesetId)
        public
        view
        returns (request memory)
    {
        return requests[requesetId];
    }

    function request_of_articleId(uint256 articleid)
        public
        view
        returns (uint256[] memory)
    {
        return articles_to_request[articleid];
    }
}
