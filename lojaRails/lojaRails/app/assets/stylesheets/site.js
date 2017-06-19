import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // *=require bootstrap
  // !
 * Start Bootstrap - Shop Homepage (http://startbootstrap.com/)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
  'body': {
    'paddingTop': [{ 'unit': 'px', 'value': 70 }],
    // Required padding for .navbar-fixed-top. Remove if using .navbar-static-top. Change if height of navigation changes.
  },
  'slide-image': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'carousel-holder': {
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'carousel-control': {
    'borderRadius': '4px'
  },
  'item': {
    'borderRadius': '4px'
  },
  'caption': {
    'height': [{ 'unit': 'px', 'value': 130 }],
    'overflow': 'hidden'
  },
  'caption h4': {
    'whiteSpace': 'nowrap'
  },
  'thumbnail img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ratings': {
    'paddingRight': [{ 'unit': 'px', 'value': 10 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }],
    'color': '#d17581'
  },
  'thumbnail': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'thumbnail caption-full': {
    'padding': [{ 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 9 }],
    'color': '#333'
  },
  'footer': {
    'margin': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }]
  }
});
