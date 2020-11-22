// componentes
var Home = {
  template: '<h2>Home</h2>'
}
 
var AboutUs = {
  template: '<h2>About Us</h2>'
}
 
var Contact = {
  template: '<h2>Contact</h2>'
}
 
var NotFound = {
  template: '<h2>Not Found</h2>'
}
 
// indicamos las rutas con el componente correspondiente
var router = new VueRouter({
  history: false,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about-us', name: 'about-us', component: AboutUs },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '*', name: 'not-found', component: NotFound }
  ],
});
 
// añadimos router a la instancia de Vue
new Vue({
  el: '#app',
  router: router
});