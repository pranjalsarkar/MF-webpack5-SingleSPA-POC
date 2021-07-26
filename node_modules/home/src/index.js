import { registerApplication, start } from 'single-spa';

registerApplication(
    'header',
    () => import('nav/Header'),
    location => location.pathname.startsWith('/')
  );
  
  registerApplication(
    'footer',
    () => import('nav/Footer'),
    location => location.pathname.startsWith('/')
  );
  
  registerApplication(
    'product',
    () => import('product/Product'),
    location => location.pathname.startsWith('/')
  );

  start();