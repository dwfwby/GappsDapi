(class GASDasDatabase{constructor(e,t){this.folder=t.getFoldersByName(e),this.folder.hasNext()?this.folder=this.folder.next():this.folder=t.createFolder(e)}clearBase(){let e=this.folder.getFiles();for(;e.hasNext();)e.next().setTrashed(!0)}deleteBase(){this.folder.setTrashed(!0);for(const[e,t]of Object.entries(this))delete this[e]}getRandomInt(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}dataToObject(e,t,s){let r={};return r.id=t,r.post=e,r.value=s,r}createPost(e="",t="",s=MimeType.PLAIN_TEXT){e=JSON.stringify(e),t=t||Utilities.base64Encode((new Date).valueOf())+this.getRandomInt(1e5,999999);let r=this.folder.createFile(t,e,s);return this.dataToObject(r,t,this.getValue(r))}deletePost(e){return e.setTrashed(!0)}searchPosts(e){let t=this.folder.searchFiles(e),s=[];for(;t.hasNext();){let e=t.next();s.push(this.dataToObject(e,e.getName(),this.getValue(e)))}return s}getValue(e){let t=e.getBlob().getDataAsString();return t&&(t=JSON.parse(t)),t}setValue(e,t){return e=JSON.stringify(e),t.setContent(e)}getPosts(e=[]){let t="";return e.forEach((function(s,r){let a="";for(const[e,t]of Object.entries(s)){let s=`fullText contains '"${e}":${t}'`;a+=a?" and "+s:s}e.length>1?t+=r+1!=e.length?`(${a}) or `:`(${a})`:t=a})),this.searchPosts(t)}})
