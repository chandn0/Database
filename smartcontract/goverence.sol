// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;
import "@openzeppelin/contracts@4.6.0/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.6.0/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts@4.6.0/access/Ownable.sol";
import "@openzeppelin/contracts@4.6.0/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts@4.6.0/token/ERC721/utils/ERC721Holder.sol";

contract ownershare is Ownable, ERC721Holder {

event initializeblog(address indexed owner, uint indexed tokenId);
event requestchangeblog(address indexed owner, uint indexed tokenId,string indexed uri);
event voted(address indexed owner, uint indexed requesId);
event changesmade(uint256 requestId);
event ownershiptransfered(address indexed owner,uint8 indexed ownerper,address indexed sharewith,uint8  amount,uint256  tokenId);
  
    IERC721 public collection;
    address public main;
    struct request {
        address owner;
        uint256 token;
        string uri;
        address[] acceptedaddress;
        uint8 acceptedamount;
    }
    request[] public requests;
    mapping(uint256=>bool) public checktoken;
    mapping(uint256=>mapping(address=>uint8)) public ownerper;

    constructor(address _collection)  {
        main=_collection;
        collection = IERC721(_collection);
       }

    function initialize( uint256 _tokenId) external {
        require(collection.ownerOf(_tokenId)!= address(this), "add already");
        require(collection.getApproved(_tokenId)==address(this),"notapproved");
        collection.safeTransferFrom(msg.sender, address(this), _tokenId);
      checktoken[_tokenId]=true;
      ownerper[_tokenId][msg.sender]=100;
      emit initializeblog(msg.sender,_tokenId);
    }

    function requestchange(uint256 tokenid,string memory uri) public{
    require(checktoken[tokenid]==true,"token does not exist");
     request memory requestn;
     requestn.owner=msg.sender;
     requestn.token=tokenid;
     requestn.uri=uri;
     requests.push(requestn);
    emit requestchangeblog(msg.sender,tokenid,uri);
    }

    function confrimchange(uint256 requestId) public{
        bool  vote=false;
        require(ownerper[requests[requestId].token][msg.sender]!=0,"you are not owner of blog");
       for (uint i = 0; i < requests[requestId].acceptedaddress.length; i++) {
           if(msg.sender==requests[requestId].acceptedaddress[i]){
               vote=true;
           }
       }
       require(vote==false,"already voted");
       requests[requestId].acceptedamount+=ownerper[requests[requestId].token][msg.sender];
        emit voted(msg.sender,requestId);
       if(requests[requestId].acceptedamount>=60){
        main.delegatecall(
            abi.encodeWithSignature("_setTokenURI(uint256, string)",requests[requestId].token,requests[requestId].uri));
                requests[requestId] = requests[requests.length - 1];
                requests.pop();
                emit changesmade(requestId);
       }
    }

    function ownershiptransfer(address sharewith,uint8 amount,uint256 tokenId)public {
        require(checktoken[tokenId]==true," token does not exist");
        require( ownerper[tokenId][msg.sender]>=amount,"share amount is higher then you have");
        ownerper[tokenId][msg.sender]-=amount;
        ownerper[tokenId][sharewith]+=amount;
        emit ownershiptransfered(msg.sender,ownerper[tokenId][msg.sender],sharewith,amount,tokenId);
    }
}

