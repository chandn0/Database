// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;
contract wikiweb3 {

    struct request {
        address owner;
        uint256 articleId;
        string uri;
        address[] acceptedaddress;
        uint8 acceptedamount;
    }
    request[] public requests;
    struct article{
        string ipfsUri;
        uint256 Id;
        
    }
    mapping(uint=>mapping(address=>uint8)) ownershare;
    article[] public articles;
    mapping(uint256=>uint256) articleposition;

    function createarticle(string memory uri)public{
    article memory article1;
    article1.ipfsUri=uri;
    article1.Id=articles.length;
    ownershare[article1.Id][msg.sender]=100;
    articles.push(article1);
    articleposition[article1.Id]=articles.length;
    }

    function updatearticle(uint256 Id,string memory uri) internal{
        articles[Id].ipfsUri=uri;
    }

    function requestchange(uint256 Id,string memory uri) public{
    require(articleposition[Id]!=0,"token does not exist");
    if(ownershare[Id][msg.sender]>=65){
     updatearticle(Id,uri);
    }else{
     request memory request1;
     request1.owner=msg.sender;
     request1.articleId=Id;
     request1.uri=uri;
     request1.acceptedamount=ownershare[Id][msg.sender];
     request1.acceptedaddress[0]=msg.sender;
     requests.push(request1);
    }
    }

    function voterequest(uint256 requestId)public {
        require(requests[requestId].articleId!=0,"request don't exit");
        require(ownershare[requests[requestId].articleId][msg.sender]!=0,"not a owner");
        requests[requestId].acceptedamount+=ownershare[requests[requestId].articleId][msg.sender];
        requests[requestId].acceptedaddress.push(msg.sender);
        if(requests[requestId].acceptedamount>=65){
            updatearticle(requests[requestId].articleId,requests[requestId].uri);
        }
    }

    function ownershiptransfer(uint256 articleId,address transfer_to,uint8 amount)public{
        require(articles[articleId].Id!=0,"article doesn't exist");
        require(ownershare[articles[articleId].Id][msg.sender]>=amount,"you not have required share");
        ownershare[articles[articleId].Id][msg.sender]-=amount;
        ownershare[articles[articleId].Id][transfer_to]+=amount;
    }

}
