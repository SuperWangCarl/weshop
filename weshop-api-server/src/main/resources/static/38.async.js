(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{WN3O:function(e,t,a){e.exports={standardList:"antd-pro\\pages\\-list\\-basic-list-standardList",headerInfo:"antd-pro\\pages\\-list\\-basic-list-headerInfo",listContent:"antd-pro\\pages\\-list\\-basic-list-listContent",listContentItem:"antd-pro\\pages\\-list\\-basic-list-listContentItem",extraContentSearch:"antd-pro\\pages\\-list\\-basic-list-extraContentSearch",listCard:"antd-pro\\pages\\-list\\-basic-list-listCard",standardListForm:"antd-pro\\pages\\-list\\-basic-list-standardListForm",formResult:"antd-pro\\pages\\-list\\-basic-list-formResult"}},w9uU:function(e,t,a){"use strict";var l=a("xK3H"),n=a("3rQ3");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("79JM");var r=l(a("DmMy"));a("sXHd");var d=l(a("oEbq"));a("fhlT");var u=l(a("kXZy"));a("/26P");var i=l(a("aYvq"));a("mKhK");var s=l(a("iW5v"));a("9TwZ");var o=l(a("wOVV")),f=l(a("dnxz"));a("Lzml");var c=l(a("vpm+"));a("v0Pg");var m=l(a("Byrh"));a("1pPU");var p=l(a("KjZ1"));a("VfWj");var v=l(a("Otdh"));a("FjcD");var E=l(a("PQZA"));a("XFd2");var h=l(a("33fr")),b=l(a("SeLb")),y=l(a("Sx57")),w=l(a("4zp0")),g=l(a("iVWQ")),C=l(a("lF+r")),S=l(a("PApH"));a("/MhY");var x=l(a("w0+5"));a("E2ON");var k=l(a("jjSt"));a("49Cq");var D=l(a("/OG3"));a("Q3sr");var I,M,N,L=l(a("9NP+")),O=n(a("6cB7")),T=a("VUem"),V=l(a("I9Uw")),Y=a("LneV"),A=l(a("zHco")),z=l(a("ALo4")),B=l(a("WN3O")),F=L.default.Item,H=D.default.Button,P=D.default.Group,q=k.default.Option,j=x.default.Search,W=x.default.TextArea,K=(I=(0,Y.connect)(function(e){var t=e.list,a=e.loading;return{list:t,loading:a.models.list}}),M=L.default.create(),I(N=M(N=function(e){function t(){var e,a;(0,y.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,g.default)(this,(e=(0,C.default)(t)).call.apply(e,[this].concat(n))),a.state={visible:!1,done:!1},a.formLayout={labelCol:{span:7},wrapperCol:{span:13}},a.showModal=function(){a.setState({visible:!0,current:void 0})},a.showEditModal=function(e){a.setState({visible:!0,current:e})},a.handleDone=function(){setTimeout(function(){return a.addBtn.blur()},0),a.setState({done:!1,visible:!1})},a.handleCancel=function(){setTimeout(function(){return a.addBtn.blur()},0),a.setState({visible:!1})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,l=t.dispatch,n=t.form,r=a.state.current,d=r?r.id:"";setTimeout(function(){return a.addBtn.blur()},0),n.validateFields(function(e,t){e||(a.setState({done:!0}),l({type:"list/submit",payload:(0,b.default)({id:d},t)}))})},a.deleteItem=function(e){var t=a.props.dispatch;t({type:"list/submit",payload:{id:e}})},a}return(0,S.default)(t,e),(0,w.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"list/fetch",payload:{count:5}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.list.list,l=t.loading,n=this.props.form.getFieldDecorator,b=this.state,y=b.visible,w=b.done,g=b.current,C=void 0===g?{}:g,S=function(t,a){"edit"===t?e.showEditModal(a):"delete"===t&&h.default.confirm({title:"\u5220\u9664\u4efb\u52a1",content:"\u786e\u5b9a\u5220\u9664\u8be5\u4efb\u52a1\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return e.deleteItem(a.id)}})},D=w?{footer:null,onCancel:this.handleDone}:{okText:"\u4fdd\u5b58",onOk:this.handleSubmit,onCancel:this.handleCancel},I=function(e){var t=e.title,a=e.value,l=e.bordered;return O.default.createElement("div",{className:B.default.headerInfo},O.default.createElement("span",null,t),O.default.createElement("p",null,a),l&&O.default.createElement("em",null))},M=O.default.createElement("div",{className:B.default.extraContent},O.default.createElement(P,{defaultValue:"all"},O.default.createElement(H,{value:"all"},"\u5168\u90e8"),O.default.createElement(H,{value:"progress"},"\u8fdb\u884c\u4e2d"),O.default.createElement(H,{value:"waiting"},"\u7b49\u5f85\u4e2d")),O.default.createElement(j,{className:B.default.extraContentSearch,placeholder:"\u8bf7\u8f93\u5165",onSearch:function(){return{}}})),N={showSizeChanger:!0,showQuickJumper:!0,pageSize:5,total:50},Y=function(e){var t=e.data,a=t.owner,l=t.createdAt,n=t.percent,r=t.status;return O.default.createElement("div",{className:B.default.listContent},O.default.createElement("div",{className:B.default.listContentItem},O.default.createElement("span",null,"Owner"),O.default.createElement("p",null,a)),O.default.createElement("div",{className:B.default.listContentItem},O.default.createElement("span",null,"\u5f00\u59cb\u65f6\u95f4"),O.default.createElement("p",null,(0,V.default)(l).format("YYYY-MM-DD HH:mm"))),O.default.createElement("div",{className:B.default.listContentItem},O.default.createElement(E.default,{percent:n,status:r,strokeWidth:6,style:{width:180}})))},K=function(e){return O.default.createElement(m.default,{overlay:O.default.createElement(v.default,{onClick:function(t){var a=t.key;return S(a,e.current)}},O.default.createElement(v.default.Item,{key:"edit"},"\u7f16\u8f91"),O.default.createElement(v.default.Item,{key:"delete"},"\u5220\u9664"))},O.default.createElement("a",null,"\u66f4\u591a ",O.default.createElement(p.default,{type:"down"})))},Q=function(){return w?O.default.createElement(z.default,{type:"success",title:"\u64cd\u4f5c\u6210\u529f",description:"\u4e00\u7cfb\u5217\u7684\u4fe1\u606f\u63cf\u8ff0\uff0c\u5f88\u77ed\u540c\u6837\u4e5f\u53ef\u4ee5\u5e26\u6807\u70b9\u3002",actions:O.default.createElement(c.default,{type:"primary",onClick:e.handleDone},"\u77e5\u9053\u4e86"),className:B.default.formResult}):O.default.createElement(L.default,{onSubmit:e.handleSubmit},O.default.createElement(F,(0,f.default)({label:"\u4efb\u52a1\u540d\u79f0"},e.formLayout),n("title",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4efb\u52a1\u540d\u79f0"}],initialValue:C.title})(O.default.createElement(x.default,{placeholder:"\u8bf7\u8f93\u5165"}))),O.default.createElement(F,(0,f.default)({label:"\u5f00\u59cb\u65f6\u95f4"},e.formLayout),n("createdAt",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5f00\u59cb\u65f6\u95f4"}],initialValue:C.createdAt?(0,V.default)(C.createdAt):null})(O.default.createElement(o.default,{showTime:!0,placeholder:"\u8bf7\u9009\u62e9",format:"YYYY-MM-DD HH:mm:ss",style:{width:"100%"}}))),O.default.createElement(F,(0,f.default)({label:"\u4efb\u52a1\u8d1f\u8d23\u4eba"},e.formLayout),n("owner",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4efb\u52a1\u8d1f\u8d23\u4eba"}],initialValue:C.owner})(O.default.createElement(k.default,{placeholder:"\u8bf7\u9009\u62e9"},O.default.createElement(q,{value:"\u4ed8\u6653\u6653"},"\u4ed8\u6653\u6653"),O.default.createElement(q,{value:"\u5468\u6bdb\u6bdb"},"\u5468\u6bdb\u6bdb")))),O.default.createElement(F,(0,f.default)({},e.formLayout,{label:"\u4ea7\u54c1\u63cf\u8ff0"}),n("subDescription",{rules:[{message:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26\u7684\u4ea7\u54c1\u63cf\u8ff0\uff01",min:5}],initialValue:C.subDescription})(O.default.createElement(W,{rows:4,placeholder:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26"}))))};return O.default.createElement(A.default,null,O.default.createElement("div",{className:B.default.standardList},O.default.createElement(u.default,{bordered:!1},O.default.createElement(i.default,null,O.default.createElement(s.default,{sm:8,xs:24},O.default.createElement(I,{title:"\u6211\u7684\u5f85\u529e",value:"8\u4e2a\u4efb\u52a1",bordered:!0})),O.default.createElement(s.default,{sm:8,xs:24},O.default.createElement(I,{title:"\u672c\u5468\u4efb\u52a1\u5e73\u5747\u5904\u7406\u65f6\u95f4",value:"32\u5206\u949f",bordered:!0})),O.default.createElement(s.default,{sm:8,xs:24},O.default.createElement(I,{title:"\u672c\u5468\u5b8c\u6210\u4efb\u52a1\u6570",value:"24\u4e2a\u4efb\u52a1"})))),O.default.createElement(u.default,{className:B.default.listCard,bordered:!1,title:"\u6807\u51c6\u5217\u8868",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:M},O.default.createElement(c.default,{type:"dashed",style:{width:"100%",marginBottom:8},icon:"plus",onClick:this.showModal,ref:function(t){e.addBtn=(0,T.findDOMNode)(t)}},"\u6dfb\u52a0"),O.default.createElement(r.default,{size:"large",rowKey:"id",loading:l,pagination:N,dataSource:a,renderItem:function(t){return O.default.createElement(r.default.Item,{actions:[O.default.createElement("a",{onClick:function(a){a.preventDefault(),e.showEditModal(t)}},"\u7f16\u8f91"),O.default.createElement(K,{current:t})]},O.default.createElement(r.default.Item.Meta,{avatar:O.default.createElement(d.default,{src:t.logo,shape:"square",size:"large"}),title:O.default.createElement("a",{href:t.href},t.title),description:t.subDescription}),O.default.createElement(Y,{data:t}))}}))),O.default.createElement(h.default,(0,f.default)({title:w?null:"\u4efb\u52a1".concat(C?"\u7f16\u8f91":"\u6dfb\u52a0"),className:B.default.standardListForm,width:640,bodyStyle:w?{padding:"72px 0"}:{padding:"28px 0 0"},destroyOnClose:!0,visible:y},D),Q()))}}]),t}(O.PureComponent))||N)||N),Q=K;t.default=Q}}]);