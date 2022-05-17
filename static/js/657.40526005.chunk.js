"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[657,554],{9688:function(e,n,r){r.r(n),r.d(n,{RegistrationPage:function(){return C},default:function(){return P}});var a=r(6445),s=r(5048),o=r(8979),i=r(5705),t=r(4708),l=r(4554),d=r(3044),m=r(890),u=r(1889),c=r(7665),h=r(6151),p=r(3060),x=r(3504),f=r(1089),w=f.Ry().shape({name:f.Z_("Enter your name").min(3,"Too Short!").max(25,"Too long!").required("It's required!"),email:f.Z_().email("Invalid email").required("It's required!"),password:f.Z_().min(7,"Password shoud be no less than 7 symbols!").required("It's required!"),passwordConfirm:f.Z_().required("It's required!").oneOf([f.iH("password")],"Passwords must mutch")}),Z=r(638),j=r(403),b=r(184),g={name:"",email:"",password:"",passwordConfirm:""},v=function(){var e=(0,s.I0)(),n=(0,i.TA)({initialValues:g,validationSchema:w,onSubmit:function(n){var r=n.name,a=n.email,s=n.password;e(o.r5.register({name:r,email:a,password:s}))}}),r=n.values,a=n.handleSubmit,f=n.handleChange,v=n.handleBlur,C=n.isValid,P=n.errors,y=n.touched;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.ZP,{}),(0,b.jsxs)(l.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,b.jsx)(d.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,b.jsx)(j.Z,{})}),(0,b.jsx)(m.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,b.jsxs)(l.Z,{component:"form",sx:{mt:3},onSubmit:a,children:[(0,b.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,b.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(c.Z,{variant:"outlined",label:"Name",type:"text",name:"name",value:r.name,onChange:f,onBlur:v,error:y.name&&Boolean(P.name),helperText:y.name&&P.name})}),(0,b.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(c.Z,{variant:"outlined",label:"Email",type:"email",name:"email",value:r.email,onChange:f,onBlur:v,error:y.email&&Boolean(P.email),helperText:y.email&&P.email})}),(0,b.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(c.Z,{type:"password",name:"password",variant:"outlined",label:"Password",value:r.password,onChange:f,onBlur:v,error:y.password&&Boolean(P.password),helperText:y.password&&P.password})}),(0,b.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(c.Z,{type:"password",name:"passwordConfirm",variant:"outlined",label:"Confirm Password",value:r.passwordConfirm,onChange:f,onBlur:v,error:y.passwordConfirm&&Boolean(P.passwordConfirm),helperText:y.passwordConfirm&&P.passwordConfirm})})]}),(0,b.jsx)(h.Z,{variant:"contained",fullWidth:!0,sx:{mt:3,mb:2},startIcon:(0,b.jsx)(Z.Z,{}),type:"subbmit",disabled:!C,children:"SING UP"}),(0,b.jsx)(u.ZP,{container:!0,justifyContent:"flex-end",children:(0,b.jsx)(u.ZP,{item:!0,children:(0,b.jsx)(p.Z,{variant:"body2",component:x.rU,to:"/login",children:"Already have an account? Sign in"})})})]})]})]})},C=function(){return(0,b.jsx)(a.Z,{component:"main",maxWidth:"xs",children:(0,b.jsx)(v,{})})},P=C},7657:function(e,n,r){r.r(n),r.d(n,{default:function(){return a.default}});var a=r(9688)}}]);
//# sourceMappingURL=657.40526005.chunk.js.map