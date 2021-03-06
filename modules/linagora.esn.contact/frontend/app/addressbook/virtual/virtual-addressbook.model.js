(function(angular) {
  'use strict';

  angular.module('linagora.esn.contact')
    .factory('ContactVirtualAddressBook', ContactVirtualAddressBook);

  function ContactVirtualAddressBook(CONTACT_ADDRESSBOOK_TYPES) {
    function ContactVirtualAddressBook(id, name, loadNextItems, options) {
      this.id = id;
      this.name = name;
      this.bookName = id;
      this.type = CONTACT_ADDRESSBOOK_TYPES.virtual;
      this.description = 'Virtual addressbook';
      this.loadNextItems = loadNextItems;
      this.options = options;
      this.excludeFromAggregate = options && options.excludeFromAggregate;
    }

    return ContactVirtualAddressBook;
  }
})(angular);
