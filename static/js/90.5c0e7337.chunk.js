"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[90],{83090:function(e,t,r){r.r(t),r.d(t,{MetamaskAdapter:function(){return ne}});var n=r(74165),a=r(15861),i=r(15671),o=r(43144),c=r(97326),s=r(11752),u=r(61120),l=r(60136),h=r(29388),p=r(4942),d=r(63811),f=r.n(d),m=r(98737),v=r(61881),y=(r(30876),r(68041)),k=r(62891),E=r.n(k),g=(r(98689),r(63044)),N=r.n(g),b=r(21522),O=r.n(b);r(14681);function C(){}var w="ACK";v.Duplex;function Z(e,t,r){try{Reflect.apply(e,t,r)}catch(n){setTimeout((function(){throw n}))}}function P(e){for(var t=e.length,r=new Array(t),n=0;n<t;n+=1)r[n]=e[n];return r}var A=function(e){(0,l.Z)(r,e);var t=(0,h.Z)(r);function r(){return(0,i.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"emit",value:function(e){var t="error"===e,r=this._events;if(void 0!==r)t=t&&void 0===r.error;else if(!t)return!1;for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];if(t){var o;if(a.length>0&&(o=a[0]),o instanceof Error)throw o;var c=new Error("Unhandled error.".concat(o?" (".concat(o.message,")"):""));throw c.context=o,c}var s=r[e];if(void 0===s)return!1;if("function"===typeof s)Z(s,this,a);else for(var u=s.length,l=P(s),h=0;h<u;h+=1)Z(l[h],this,a);return!0}}]),r}(y.EventEmitter);Error;var T=function(e){(0,l.Z)(r,e);var t=(0,h.Z)(r);function r(e){var n;(0,i.Z)(this,r);var a=e.parent,o=e.name;return n=t.call(this,{objectMode:!0}),(0,p.Z)((0,c.Z)(n),"_parent",void 0),(0,p.Z)((0,c.Z)(n),"_name",void 0),n._parent=a,n._name=o,n}return(0,o.Z)(r,[{key:"_read",value:function(){}},{key:"_write",value:function(e,t,r){this._parent.push({name:this._name,data:e}),r()}}]),r}(v.Duplex);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,p.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=Symbol("IGNORE_SUBSTREAM");v.Duplex;var j=r(2583),S=r(62649),R=r.n(S);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,p.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L={EIP155:"eip155",SOLANA:"solana"},B=M(M({},L),{},{MULTICHAIN:"multichain"}),W="776218ac4734478c90191dde8cae483c",Y=function(e,t){var r=t?"number"===typeof t?t:parseInt(t,16):function(e){if(e===L.EIP155)return 1;if(e===L.SOLANA)return 1;throw new Error("Chain namespace ".concat(e," is not supported"))}(e);return e===L.EIP155?function(e){var t=L.EIP155;return 1===e?{chainNamespace:t,chainId:"0x1",rpcTarget:"https://mainnet.infura.io/v3/".concat(W),displayName:"Ethereum Mainnet",blockExplorer:"https://etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:3===e?{chainNamespace:t,chainId:"0x3",rpcTarget:"https://ropsten.infura.io/v3/".concat(W),displayName:"ropsten",blockExplorer:"https://ropsten.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:4===e?{chainNamespace:t,chainId:"0x4",rpcTarget:"https://rinkeby.infura.io/v3/".concat(W),displayName:"rinkeby",blockExplorer:"https://rinkeby.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:5===e?{chainNamespace:t,chainId:"0x5",rpcTarget:"https://goerli.infura.io/v3/".concat(W),displayName:"goerli",blockExplorer:"https://goerli.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:42===e?{chainNamespace:t,chainId:"0x2a",rpcTarget:"https://kovan.infura.io/v3/".concat(W),displayName:"kovan",blockExplorer:"https://kovan.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:137===e?{chainNamespace:t,rpcTarget:"https://polygon-rpc.com",blockExplorer:"https://polygonscan.com",chainId:"0x89",displayName:"Polygon Mainnet",ticker:"matic",tickerName:"matic"}:80001===e?{chainNamespace:t,rpcTarget:"https://rpc-mumbai.maticvigil.com",blockExplorer:"https://mumbai-explorer.matic.today",chainId:"0x13881",displayName:"Polygon Mumbai Testnet",ticker:"matic",tickerName:"matic"}:56===e?{chainNamespace:t,rpcTarget:"https://bsc-dataseed.binance.org",blockExplorer:"https://bscscan.com",chainId:"0x38",displayName:"Binance SmartChain Mainnet",ticker:"BNB",tickerName:"BNB"}:97===e?{chainNamespace:t,rpcTarget:"https://data-seed-prebsc-2-s3.binance.org:8545",blockExplorer:"https://testnet.bscscan.com",chainId:"0x61",displayName:"Binance SmartChain Testnet",ticker:"BNB",tickerName:"BNB"}:null}(r):e===L.SOLANA?function(e){var t=L.SOLANA;return 1===e?{chainNamespace:t,blockExplorer:"https://explorer.solana.com",chainId:"0x1",displayName:"Solana Mainnet",rpcTarget:"https://api.mainnet-beta.solana.com",ticker:"SOL",tickerName:"Solana Token"}:2===e?{rpcTarget:"https://api.testnet.solana.com",blockExplorer:"https://explorer.solana.com?cluster=testnet",chainId:"0x2",chainNamespace:t,displayName:"testnet",ticker:"SOL",tickerName:"solana"}:3===e?{rpcTarget:"https://api.devnet.solana.com",blockExplorer:"https://explorer.solana.com?cluster=devnet",chainId:"0x3",chainNamespace:t,displayName:"devnet",ticker:"SOL",tickerName:"solana"}:null}(r):null},q=function(e){(0,l.Z)(r,e);var t=(0,h.Z)(r);function r(e,n){var a;return(0,i.Z)(this,r),a=t.call(this,n),(0,p.Z)((0,c.Z)(a),"code",void 0),(0,p.Z)((0,c.Z)(a),"message",void 0),a.code=e,a.message=n||"",Object.defineProperty((0,c.Z)(a),"name",{value:"Web3AuthError"}),a}return(0,o.Z)(r,[{key:"toJSON",value:function(){return{name:this.name,code:this.code,message:this.message}}},{key:"toString",value:function(){return JSON.stringify(this.toJSON())}}]),r}(j.s),U=function(e){(0,l.Z)(r,e);var t=(0,h.Z)(r);function r(e,n){var a;return(0,i.Z)(this,r),a=t.call(this,e,n),Object.defineProperty((0,c.Z)(a),"name",{value:"WalletInitializationError"}),a}return(0,o.Z)(r,null,[{key:"fromCode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new r(e,"".concat(r.messages[e],", ").concat(t))}},{key:"notFound",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.fromCode(5001,e)}},{key:"notInstalled",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.fromCode(5002,e)}},{key:"notReady",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.fromCode(5003,e)}},{key:"windowBlocked",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.fromCode(5004,e)}},{key:"windowClosed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.fromCode(5005,e)}},{key:"incompatibleChainNameSpace",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.fromCode(5006,e)}},{key:"duplicateAdapterError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.fromCode(5007,e)}},{key:"invalidProviderConfigError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.fromCode(5008,e)}},{key:"providerNotReadyError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.fromCode(5009,e)}},{key:"rpcConnectionError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.fromCode(5010,e)}},{key:"invalidParams",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.fromCode(5011,e)}},{key:"invalidNetwork",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.fromCode(5013,e)}}]),r}(q);(0,p.Z)(U,"messages",{5e3:"Custom",5001:"Wallet is not found",5002:"Wallet is not installed",5003:"Wallet is not ready yet",5004:"Wallet window is blocked",5005:"Wallet window has been closed by the user",5006:"Incompatible chain namespace provided",5007:"Adapter has already been included",5008:"Invalid provider Config",5009:"Provider is not ready yet",5010:"Failed to connect with rpc url",5011:"Invalid params passed in",5013:"Invalid network provided"});var G=function(e){(0,l.Z)(r,e);var t=(0,h.Z)(r);function r(e,n){var a;return(0,i.Z)(this,r),a=t.call(this,e,n),Object.defineProperty((0,c.Z)(a),"name",{value:"WalletLoginError"}),a}return(0,o.Z)(r,null,[{key:"fromCode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new r(e,"".concat(r.messages[e]).concat(t))}},{key:"connectionError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.fromCode(5111,e)}},{key:"disconnectionError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.fromCode(5112,e)}},{key:"notConnectedError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.fromCode(5113,e)}},{key:"popupClosed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.fromCode(5114,e)}}]),r}(q);function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){(0,p.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(0,p.Z)(G,"messages",{5e3:"Custom",5111:"Failed to connect with wallet",5112:"Failed to disconnect from wallet",5113:"Wallet is not connected",5114:"Wallet popup has been closed by the user"});var K={OPENLOGIN:"openlogin",WALLET_CONNECT_V1:"wallet-connect-v1",WALLET_CONNECT_V2:"wallet-connect-v2"},z=F({TORUS_SOLANA:"torus-solana",PHANTOM:"phantom"},K),V=F({TORUS_EVM:"torus-evm",METAMASK:"metamask",COINBASE:"coinbase"},K),J=F(F({},V),z);function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,p.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $="external",ee={NOT_READY:"not_ready",READY:"ready",CONNECTING:"connecting",CONNECTED:"connected",DISCONNECTED:"disconnected",ERRORED:"errored"},te=X(X({},ee),{},{ADAPTER_DATA_UPDATED:"adapter_data_updated"}),re=function(e){(0,l.Z)(r,e);var t=(0,h.Z)(r);function r(){var e;return(0,i.Z)(this,r),e=t.apply(this,arguments),(0,p.Z)((0,c.Z)(e),"adapterData",{}),(0,p.Z)((0,c.Z)(e),"chainConfig",null),e}return(0,o.Z)(r,[{key:"chainConfigProxy",get:function(){return this.chainConfig?X({},this.chainConfig):null}},{key:"setChainConfig",value:function(e){if(this.status!==ee.READY){if(!e.chainNamespace)throw U.notReady("ChainNamespace is required while setting chainConfig");var t=Y(e.chainNamespace,e.chainId);this.chainConfig=X(X({},t),e)}}},{key:"setAdapterSettings",value:function(e){}},{key:"checkConnectionRequirements",value:function(){if(this.name!==J.WALLET_CONNECT_V1||this.status!==ee.CONNECTING){if(this.status===ee.CONNECTING)throw U.notReady("Already connecting");if(this.status===ee.CONNECTED)throw G.connectionError("Already connected");if(this.status!==ee.READY)throw G.connectionError("Wallet adapter is not ready yet")}}},{key:"checkInitializationRequirements",value:function(){if(this.status!==ee.NOT_READY){if(this.status===ee.CONNECTED)throw U.notReady("Already connected");if(this.status===ee.READY)throw U.notReady("Adapter is already initialized")}}},{key:"updateAdapterData",value:function(e){this.adapterData=e,this.emit(te.ADAPTER_DATA_UPDATED,{adapterName:this.name,data:e})}}]),r}(A);R().getLogger("web3auth-logger");var ne=function(e){(0,l.Z)(r,e);var t=(0,h.Z)(r);function r(){var e;(0,i.Z)(this,r);var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e=t.call(this),(0,p.Z)((0,c.Z)(e),"adapterNamespace",B.EIP155),(0,p.Z)((0,c.Z)(e),"currentChainNamespace",L.EIP155),(0,p.Z)((0,c.Z)(e),"type",$),(0,p.Z)((0,c.Z)(e),"name",J.METAMASK),(0,p.Z)((0,c.Z)(e),"status",ee.NOT_READY),(0,p.Z)((0,c.Z)(e),"rehydrated",!1),(0,p.Z)((0,c.Z)(e),"metamaskProvider",null),e.chainConfig=n.chainConfig||null,e}return(0,o.Z)(r,[{key:"provider",get:function(){return this.status===ee.CONNECTED&&this.metamaskProvider?this.metamaskProvider:null},set:function(e){throw new Error("Not implemented")}},{key:"init",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,s.Z)((0,u.Z)(r.prototype),"checkInitializationRequirements",this).call(this),e.next=3,f()({mustBeMetaMask:!0});case 3:if(this.metamaskProvider=e.sent,this.metamaskProvider){e.next=6;break}throw U.notInstalled("Metamask extension is not installed");case 6:if(this.status=ee.READY,this.emit(te.READY,J.METAMASK),e.prev=8,!t.autoConnect){e.next=13;break}return this.rehydrated=!0,e.next=13,this.connect();case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),this.emit(te.ERRORED,e.t0);case 18:case"end":return e.stop()}}),e,this,[[8,15]])})));return function(t){return e.apply(this,arguments)}}()},{key:"setAdapterSettings",value:function(e){}},{key:"connect",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,s.Z)((0,u.Z)(r.prototype),"checkConnectionRequirements",this).call(this),this.chainConfig||(this.chainConfig=Y(L.EIP155,1)),this.status=ee.CONNECTING,this.emit(te.CONNECTING,{adapter:J.METAMASK}),this.metamaskProvider){e.next=6;break}throw G.notConnectedError("Not able to connect with metamask");case 6:return e.prev=6,e.next=9,this.metamaskProvider.request({method:"eth_requestAccounts"});case 9:if(this.metamaskProvider.chainId===this.chainConfig.chainId){e.next=13;break}return e.next=13,this.switchChain(this.chainConfig);case 13:if(this.status=ee.CONNECTED,this.provider){e.next=16;break}throw G.notConnectedError("Failed to connect with provider");case 16:return this.provider.once("disconnect",(function(){t.disconnect()})),this.emit(te.CONNECTED,{adapter:J.METAMASK,reconnected:this.rehydrated}),e.abrupt("return",this.provider);case 21:throw e.prev=21,e.t0=e.catch(6),this.status=ee.READY,this.rehydrated=!1,this.emit(te.ERRORED,e.t0),G.connectionError("Failed to login with metamask wallet");case 27:case"end":return e.stop()}}),e,this,[[6,21]])})));return function(){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.length>0&&void 0!==a[0]?a[0]:{cleanup:!1},this.status===ee.CONNECTED){e.next=3;break}throw G.disconnectionError("Not connected with wallet");case 3:null===(t=this.provider)||void 0===t||t.removeAllListeners(),r.cleanup?(this.status=ee.NOT_READY,this.metamaskProvider=null):this.status=ee.READY,this.rehydrated=!1,this.emit(te.DISCONNECTED);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.status===ee.CONNECTED){e.next=2;break}throw G.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return e.abrupt("return",{});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"switchChain",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.metamaskProvider){e.next=2;break}throw G.notConnectedError("Not connected with wallet");case 2:return e.prev=2,e.next=5,this.metamaskProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:t.chainId}]});case 5:case 12:e.next=15;break;case 7:if(e.prev=7,e.t0=e.catch(2),4902!==e.t0.code){e.next=14;break}return e.next=12,this.metamaskProvider.request({method:"wallet_addEthereumChain",params:[{chainId:t.chainId,chainName:t.displayName,rpcUrls:[t.rpcTarget]}]});case 14:throw e.t0;case 15:case"end":return e.stop()}}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()}]),r}(re)}}]);