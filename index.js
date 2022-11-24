var customerName = 'bob'
const leastFavoriteCustomer = 'ash'

function customerName(){
   return  customerName
}
customerName();

function upperCaseCustomerName(){
   return customerName = customerName.toUpperCase();
}
upperCaseCustomerName();

function setBestCustomer(){
   bestCustomer = 'not bob'
}
setBestCustomer();

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}
overwriteBestCustomer();

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'bob'
}
changeLeastFavoriteCustomer();

