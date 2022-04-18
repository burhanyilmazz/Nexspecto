import General         from  '../../../src/assets/scripts/General';
import LazyLoad         from  '../../../src/assets/scripts/LazyLoad';

import FormInput        from  '../../../src/atoms/FormInput/FormInput';
import FormTextarea     from  '../../../src/atoms/FormTextarea/FormTextarea';
import Hamburger        from  '../../../src/atoms/Hamburger/Hamburger';

import Accordion        from  '../../../src/molecules/Accordion/Accordion';
import Modal            from  '../../../src/molecules/Modal/Modal';

import Header           from  '../../../src/organisms/Header/Header';

const Components = {
  LazyLoad,

  FormInput,
  FormTextarea,
  Hamburger,

  Accordion,
  Modal,
  
  Header,
};

function buildComponent( that, type, data ) {
  const options = data || {};
  let Component = Components[type];
  if ( Component ) {
    Component = new Component($(that), options);
    that.setComponent( type, Component);
    $(that).data(`component${type}`, Component).removeAttr("data-component").removeData("component");
  }
}

HTMLElement.prototype.getComponent = function( type ) {
  const Component = this[ type ];
  if ( Component ) {
    return Component;
  }
  return undefined;
}

HTMLElement.prototype.setComponent = function( type, Component ) {
  this[type] = Component;
}

window.initiateComponents = function() {
  $('[data-component]').each(function() {
    const data = $( this ).data('component');
    if ( Array.isArray( data ) ) {
      for( var i in data ) {
        buildComponent( this, data[i].type, data[i] );
      }
    } else if ( typeof data == "object" ) {
      buildComponent( this, data.type, data );
    } else if ( typeof data == "string" ) {
      buildComponent( this, data, $( this ).data() );
    }

  });
}

$(document).ready(() => initiateComponents());
