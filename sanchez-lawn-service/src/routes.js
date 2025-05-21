import React, { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Locations = lazy(() => import('./pages/Locations'));
const Service = lazy(() => import('./pages/Service'));
const Contact = lazy(() => import('./pages/Contact'));
const Quote = lazy(() => import('./pages/Quote'));

export const routesConfig = [
  { path: '/', element: React.createElement(Home) },
  { path: '/services', element: React.createElement(Services) },
  { path: '/locations', element: React.createElement(Locations) },
  { path: '/services/:name', element: React.createElement(Service) },
  { path: '/contact', element: React.createElement(Contact)},
  { path: '/quote', element: React.createElement(Quote)},
]

let hasPreloadedServices = false;
let hasPreloadedService = false;
let hasPreloadedLocations = false;
let hasPreloadedContact = false;
let hasPreloadedQuote = false;


export const preloadServices = () => {
  if (!hasPreloadedServices) {
    import('./pages/Service');
    hasPreloadedServices = true;
  }
};
export const preloadLocations = () => {
    if(!hasPreloadedLocations){
        import('./pages/Locations');
        hasPreloadedLocations = true
    }
};
export const preloadService = () => {
    if(!hasPreloadedService){
        import('./pages/Service')
        hasPreloadedService = true;
    }
};
export const preloadContact = () => {
    if(!hasPreloadedContact){
        import('./pages/Contact')
        hasPreloadedContact = true;
    }
};
export const preloadQuote = () => {
    if(!hasPreloadedQuote){
        import('./pages/Quote')
        hasPreloadedQuote = true;
    }
};