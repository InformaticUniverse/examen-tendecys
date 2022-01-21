export interface Orders {
    success: boolean;
    orders:  Order[];
    page:    Page;
}

export interface Order {
    id:                 string;
    number:             string;
    marketPlaceId:      null;
    groupId:            null;
    name:               any;
    email:              null;
    fulfillmentStatus:  FulfillmentStatusClass;
    currency:           String;
    totals:             Totals;
    taxesIncluded:      string;
    taxLines:           any[];
    units:              Units;
    status:             any;
    locationId:         null;
    reference:          null;
    tags:               any[];
    payment:            Payment;
    customer:           Customer;
    billingAddress:     IngAddress;
    shippingMethod:     null;
    shippingLabel:      null;
    shippingAddress:    IngAddress;
    items:              Item[];
    packages:           any[];
    meta:               null;
    dates:              Dates;
    cancelReason:       null;
    note:               null;
    locations:          any[];
    checkoutId:         null;
    partialFulfillment: null;
}

export interface IngAddress {
    id:         null;
    firstName:  String;
    lastName:   String;
    dni:        null;
    address1:   any;
    address2:   any;
    address3:   null;
    country:    Country;
    state:      Country;
    city:       String;
    postalCode: any;
    phone:      any;
    email:      null;
    company:    any;
    references: null;
}



export enum City {
    Fakecity = "Fakecity",
}

export enum Company {
    EnviaCOM = "envia.com",
}

export interface Country {
    code:     any;
    name:     any;
    codeIso2: any;
    codeIso3: any;
}




export interface Customer {
}

export interface Dates {
    canceledAt: null;
    closedAt:   null;
    createdAt:  any;
    updatedAt:  any;
    paidAt:     any;
}

export interface FulfillmentStatusClass {
    id:                 null;
    status:             any;
    ecartapi:           String;
    ecartapiId:         string;
    partiallAvailable?: string;
    financial?:         String;
}




export interface Item {
    id?:               string;
    variantId?:        string;
    productId?:        string;
    offerId?:          any;
    sku:              any;
    fulfillment?:     Fulfillment;
    name:             any;
    upc?:              any;
    requiresShipping?: string;
    quantity:         string;
    price:            string;
    discount?:         string;
    associatedItems?: any[];
    bundled?:          string;
    tax?:             null;
    taxable?:          string;
    weight?:           any;
    vendor?:           any;
    imageUrl?:        string|null;
    ecartapiUrl?:      string;
}

export interface Fulfillment {
    quantity: string;
    service:  any;
    status:   any;
}

export enum Service {
    Manual = "manual",
}

export enum ItemName {
    CamisaMangaLargaM = "Camisa manga larga - M",
}

export enum Sku {
    Test1 = "TEST1",
}

export enum Vendor {
    Ecarttest = "ecarttest",
}

export interface Payment {
    method: null;
    status: any;
}



export interface Totals {
    subtotal: string;
    total:    string;
    tax:      string;
    discount: string;
    weight:   any;
    shipping: string;
}

export interface Units {
    weight: any;
}

export interface Page {
    next:     null;
    previous: null;
}

export const orderDefault : Orders = {
    "success": true,
    orders: [
        {
            "id": "3953539481740",
            "number": "1283",
            "marketPlaceId": null,
            "groupId": null,
            "name": "#1283",
            "email": null,
            "fulfillmentStatus": {
                "id": null,
                "status": null,
                "ecartapi": "unfulfilled",
                "ecartapiId": "3",
                "partiallAvailable": "true"
            },
            "currency": "MXN",
            "totals": {
                "subtotal": "240.00",
                "total": "340.00",
                "tax": "100.00",
                "discount": "10.00",
                "weight": null,
                "shipping": "0.00"
            },
            "taxesIncluded": "false",
            "taxLines": [],
            "units": {
                "weight": "kg"
            },
            "status": {
                "id": null,
                "status": "any",
                "financial": "paid",
                "ecartapi": "paid",
                "ecartapiId": "1"
            },
            "locationId": null,
            "reference": null,
            "tags": [
                "imported"
            ],
            "payment": {
                "method": null,
                "status": "paid"
            },
            "customer": {},
            "billingAddress": {
                "id": null,
                "firstName": "Alex",
                "lastName": "de la Cruz",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "shippingMethod": null,
            "shippingLabel": null,
            "shippingAddress": {
                "id": null,
                "firstName": "John",
                "lastName": "Silver",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "items": [
                {
                    "id": "10204150759564",
                    "variantId": "33732617797772",
                    "productId": "4591541944460",
                    "offerId": null,
                    "sku": "TEST1",
                    "fulfillment": {
                        "quantity": "1",
                        "service": "manual",
                        "status": null
                    },
                    "name": "Camisa manga larga - M",
                    "upc": null,
                    "requiresShipping": "true",
                    "quantity": "1",
                    "price": "250.00",
                    "discount": "0.00",
                    "associatedItems": [],
                    "bundled": "false",
                    "tax": null,
                    "taxable": "false",
                    "weight": null,
                    "vendor": "ecarttest",
                    "imageUrl": null,
                    "ecartapiUrl": "https://eshop-deve.herokuapp.com/api/v2/products/4591541944460"
                }
            ],
            "packages": [],
            "meta": null,
            "dates": {
                "canceledAt": null,
                "closedAt": null,
                "createdAt": "2022-01-19T19:54:48-05:00",
                "updatedAt": "2022-01-19T19:54:49-05:00",
                "paidAt": "2022-01-19T19:54:48-05:00"
            },
            "cancelReason": null,
            "note": null,
            "locations": [],
            "checkoutId": null,
            "partialFulfillment": null
        },
        {
            "id": "3953539317900",
            "number": "1282",
            "marketPlaceId": null,
            "groupId": null,
            "name": "#1282",
            "email": null,
            "fulfillmentStatus": {
                "id": null,
                "status": null,
                "ecartapi": "unfulfilled",
                "ecartapiId": "3",
                "partiallAvailable": "true"
            },
            "currency": "MXN",
            "totals": {
                "subtotal": "240.00",
                "total": "340.00",
                "tax": "100.00",
                "discount": "10.00",
                "weight": null,
                "shipping": "0.00"
            },
            "taxesIncluded": "false",
            "taxLines": [],
            "units": {
                "weight": "kg"
            },
            "status": {
                "id": null,
                "status": "any",
                "financial": "paid",
                "ecartapi": "paid",
                "ecartapiId": "1"
            },
            "locationId": null,
            "reference": null,
            "tags": [
                "imported"
            ],
            "payment": {
                "method": null,
                "status": "paid"
            },
            "customer": {},
            "billingAddress": {
                "id": null,
                "firstName": "Alex",
                "lastName": "de la Cruz",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "shippingMethod": null,
            "shippingLabel": null,
            "shippingAddress": {
                "id": null,
                "firstName": "John",
                "lastName": "Silver",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "items": [
                {
                    "id": "10204148957324",
                    "variantId": "33732617797772",
                    "productId": "4591541944460",
                    "offerId": null,
                    "sku": "TEST1",
                    "fulfillment": {
                        "quantity": "1",
                        "service": "manual",
                        "status": null
                    },
                    "name": "Camisa manga larga - M",
                    "upc": null,
                    "requiresShipping": "true",
                    "quantity": "1",
                    "price": "250.00",
                    "discount": "0.00",
                    "associatedItems": [],
                    "bundled": "false",
                    "tax": null,
                    "taxable": "false",
                    "weight": null,
                    "vendor": "ecarttest",
                    "imageUrl": null,
                    "ecartapiUrl": "https://eshop-deve.herokuapp.com/api/v2/products/4591541944460"
                }
            ],
            "packages": [],
            "meta": null,
            "dates": {
                "canceledAt": null,
                "closedAt": null,
                "createdAt": "2022-01-19T19:54:44-05:00",
                "updatedAt": "2022-01-19T19:54:45-05:00",
                "paidAt": "2022-01-19T19:54:44-05:00"
            },
            "cancelReason": null,
            "note": null,
            "locations": [],
            "checkoutId": null,
            "partialFulfillment": null
        },
        {
            "id": "3953538957452",
            "number": "1281",
            "marketPlaceId": null,
            "groupId": null,
            "name": "#1281",
            "email": null,
            "fulfillmentStatus": {
                "id": null,
                "status": null,
                "ecartapi": "unfulfilled",
                "ecartapiId": "3",
                "partiallAvailable": "true"
            },
            "currency": "MXN",
            "totals": {
                "subtotal": "240.00",
                "total": "340.00",
                "tax": "100.00",
                "discount": "10.00",
                "weight": null,
                "shipping": "0.00"
            },
            "taxesIncluded": "false",
            "taxLines": [],
            "units": {
                "weight": "kg"
            },
            "status": {
                "id": null,
                "status": "any",
                "financial": "paid",
                "ecartapi": "paid",
                "ecartapiId": "1"
            },
            "locationId": null,
            "reference": null,
            "tags": [
                "imported"
            ],
            "payment": {
                "method": null,
                "status": "paid"
            },
            "customer": {},
            "billingAddress": {
                "id": null,
                "firstName": "Alex",
                "lastName": "de la Cruz",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "shippingMethod": null,
            "shippingLabel": null,
            "shippingAddress": {
                "id": null,
                "firstName": "John",
                "lastName": "Silver",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "items": [
                {
                    "id": "10204148433036",
                    "variantId": "33732617797772",
                    "productId": "4591541944460",
                    "offerId": null,
                    "sku": "TEST1",
                    "fulfillment": {
                        "quantity": "1",
                        "service": "manual",
                        "status": null
                    },
                    "name": "Camisa manga larga - M",
                    "upc": null,
                    "requiresShipping": "true",
                    "quantity": "1",
                    "price": "250.00",
                    "discount": "0.00",
                    "associatedItems": [],
                    "bundled": "false",
                    "tax": null,
                    "taxable": "false",
                    "weight": null,
                    "vendor": "ecarttest",
                    "imageUrl": null,
                    "ecartapiUrl": "https://eshop-deve.herokuapp.com/api/v2/products/4591541944460"
                }
            ],
            "packages": [],
            "meta": null,
            "dates": {
                "canceledAt": null,
                "closedAt": null,
                "createdAt": "2022-01-19T19:54:38-05:00",
                "updatedAt": "2022-01-19T19:54:41-05:00",
                "paidAt": "2022-01-19T19:54:38-05:00"
            },
            "cancelReason": null,
            "note": null,
            "locations": [],
            "checkoutId": null,
            "partialFulfillment": null
        },
        {
            "id": "3953538859148",
            "number": "1280",
            "marketPlaceId": null,
            "groupId": null,
            "name": "#1280",
            "email": null,
            "fulfillmentStatus": {
                "id": null,
                "status": null,
                "ecartapi": "unfulfilled",
                "ecartapiId": "3",
                "partiallAvailable": "true"
            },
            "currency": "MXN",
            "totals": {
                "subtotal": "240.00",
                "total": "340.00",
                "tax": "100.00",
                "discount": "10.00",
                "weight": null,
                "shipping": "0.00"
            },
            "taxesIncluded": "false",
            "taxLines": [],
            "units": {
                "weight": "kg"
            },
            "status": {
                "id": null,
                "status": "any",
                "financial": "paid",
                "ecartapi": "paid",
                "ecartapiId": "1"
            },
            "locationId": null,
            "reference": null,
            "tags": [
                "imported"
            ],
            "payment": {
                "method": null,
                "status": "paid"
            },
            "customer": {},
            "billingAddress": {
                "id": null,
                "firstName": "Alex",
                "lastName": "de la Cruz",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "shippingMethod": null,
            "shippingLabel": null,
            "shippingAddress": {
                "id": null,
                "firstName": "John",
                "lastName": "Silver",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "items": [
                {
                    "id": "10204148170892",
                    "variantId": "33732617797772",
                    "productId": "4591541944460",
                    "offerId": null,
                    "sku": "TEST1",
                    "fulfillment": {
                        "quantity": "1",
                        "service": "manual",
                        "status": null
                    },
                    "name": "Camisa manga larga - M",
                    "upc": null,
                    "requiresShipping": "true",
                    "quantity": "1",
                    "price": "250.00",
                    "discount": "0.00",
                    "associatedItems": [],
                    "bundled": "false",
                    "tax": null,
                    "taxable": "false",
                    "weight": null,
                    "vendor": "ecarttest",
                    "imageUrl": null,
                    "ecartapiUrl": "https://eshop-deve.herokuapp.com/api/v2/products/4591541944460"
                }
            ],
            "packages": [],
            "meta": null,
            "dates": {
                "canceledAt": null,
                "closedAt": null,
                "createdAt": "2022-01-19T19:54:33-05:00",
                "updatedAt": "2022-01-19T19:54:34-05:00",
                "paidAt": "2022-01-19T19:54:33-05:00"
            },
            "cancelReason": null,
            "note": null,
            "locations": [],
            "checkoutId": null,
            "partialFulfillment": null
        },
        {
            "id": "3953537974412",
            "number": "1279",
            "marketPlaceId": null,
            "groupId": null,
            "name": "#1279",
            "email": null,
            "fulfillmentStatus": {
                "id": null,
                "status": null,
                "ecartapi": "unfulfilled",
                "ecartapiId": "3",
                "partiallAvailable": "true"
            },
            "currency": "MXN",
            "totals": {
                "subtotal": "240.00",
                "total": "340.00",
                "tax": "100.00",
                "discount": "10.00",
                "weight": null,
                "shipping": "0.00"
            },
            "taxesIncluded": "false",
            "taxLines": [],
            "units": {
                "weight": "kg"
            },
            "status": {
                "id": null,
                "status": "any",
                "financial": "paid",
                "ecartapi": "paid",
                "ecartapiId": "1"
            },
            "locationId": null,
            "reference": null,
            "tags": [
                "imported"
            ],
            "payment": {
                "method": null,
                "status": "paid"
            },
            "customer": {},
            "billingAddress": {
                "id": null,
                "firstName": "Alex",
                "lastName": "de la Cruz",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "shippingMethod": null,
            "shippingLabel": null,
            "shippingAddress": {
                "id": null,
                "firstName": "John",
                "lastName": "Silver",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "items": [
                {
                    "id": "10204144337036",
                    "variantId": "33732617797772",
                    "productId": "4591541944460",
                    "offerId": null,
                    "sku": "TEST1",
                    "fulfillment": {
                        "quantity": "1",
                        "service": "manual",
                        "status": null
                    },
                    "name": "Camisa manga larga - M",
                    "upc": null,
                    "requiresShipping": "true",
                    "quantity": "1",
                    "price": "250.00",
                    "discount": "0.00",
                    "associatedItems": [],
                    "bundled": "false",
                    "tax": null,
                    "taxable": "false",
                    "weight": null,
                    "vendor": "ecarttest",
                    "imageUrl": null,
                    "ecartapiUrl": "https://eshop-deve.herokuapp.com/api/v2/products/4591541944460"
                }
            ],
            "packages": [],
            "meta": null,
            "dates": {
                "canceledAt": null,
                "closedAt": null,
                "createdAt": "2022-01-19T19:53:41-05:00",
                "updatedAt": "2022-01-19T19:53:41-05:00",
                "paidAt": "2022-01-19T19:53:41-05:00"
            },
            "cancelReason": null,
            "note": null,
            "locations": [],
            "checkoutId": null,
            "partialFulfillment": null
        },
        {
            "id": "3953537941644",
            "number": "1278",
            "marketPlaceId": null,
            "groupId": null,
            "name": "#1278",
            "email": null,
            "fulfillmentStatus": {
                "id": null,
                "status": null,
                "ecartapi": "unfulfilled",
                "ecartapiId": "3",
                "partiallAvailable": "true"
            },
            "currency": "MXN",
            "totals": {
                "subtotal": "240.00",
                "total": "340.00",
                "tax": "100.00",
                "discount": "10.00",
                "weight": null,
                "shipping": "0.00"
            },
            "taxesIncluded": "false",
            "taxLines": [],
            "units": {
                "weight": "kg"
            },
            "status": {
                "id": null,
                "status": "any",
                "financial": "paid",
                "ecartapi": "paid",
                "ecartapiId": "1"
            },
            "locationId": null,
            "reference": null,
            "tags": [
                "imported"
            ],
            "payment": {
                "method": null,
                "status": "paid"
            },
            "customer": {},
            "billingAddress": {
                "id": null,
                "firstName": "Alex",
                "lastName": "de la Cruz",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "shippingMethod": null,
            "shippingLabel": null,
            "shippingAddress": {
                "id": null,
                "firstName": "John",
                "lastName": "Silver",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "items": [
                {
                    "id": "10204144304268",
                    "variantId": "33732617797772",
                    "productId": "4591541944460",
                    "offerId": null,
                    "sku": "TEST1",
                    "fulfillment": {
                        "quantity": "1",
                        "service": "manual",
                        "status": null
                    },
                    "name": "Camisa manga larga - M",
                    "upc": null,
                    "requiresShipping": "true",
                    "quantity": "1",
                    "price": "250.00",
                    "discount": "0.00",
                    "associatedItems": [],
                    "bundled": "false",
                    "tax": null,
                    "taxable": "false",
                    "weight": null,
                    "vendor": "ecarttest",
                    "imageUrl": null,
                    "ecartapiUrl": "https://eshop-deve.herokuapp.com/api/v2/products/4591541944460"
                }
            ],
            "packages": [],
            "meta": null,
            "dates": {
                "canceledAt": null,
                "closedAt": null,
                "createdAt": "2022-01-19T19:53:38-05:00",
                "updatedAt": "2022-01-19T19:53:39-05:00",
                "paidAt": "2022-01-19T19:53:38-05:00"
            },
            "cancelReason": null,
            "note": null,
            "locations": [],
            "checkoutId": null,
            "partialFulfillment": null
        },
        {
            "id": "3953537876108",
            "number": "1277",
            "marketPlaceId": null,
            "groupId": null,
            "name": "#1277",
            "email": null,
            "fulfillmentStatus": {
                "id": null,
                "status": null,
                "ecartapi": "unfulfilled",
                "ecartapiId": "3",
                "partiallAvailable": "true"
            },
            "currency": "MXN",
            "totals": {
                "subtotal": "240.00",
                "total": "340.00",
                "tax": "100.00",
                "discount": "10.00",
                "weight": null,
                "shipping": "0.00"
            },
            "taxesIncluded": "false",
            "taxLines": [],
            "units": {
                "weight": "kg"
            },
            "status": {
                "id": null,
                "status": "any",
                "financial": "paid",
                "ecartapi": "paid",
                "ecartapiId": "1"
            },
            "locationId": null,
            "reference": null,
            "tags": [
                "imported"
            ],
            "payment": {
                "method": null,
                "status": "paid"
            },
            "customer": {},
            "billingAddress": {
                "id": null,
                "firstName": "Alex",
                "lastName": "de la Cruz",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "shippingMethod": null,
            "shippingLabel": null,
            "shippingAddress": {
                "id": null,
                "firstName": "John",
                "lastName": "Silver",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "items": [
                {
                    "id": "10204144238732",
                    "variantId": "33732617797772",
                    "productId": "4591541944460",
                    "offerId": null,
                    "sku": "TEST1",
                    "fulfillment": {
                        "quantity": "1",
                        "service": "manual",
                        "status": null
                    },
                    "name": "Camisa manga larga - M",
                    "upc": null,
                    "requiresShipping": "true",
                    "quantity": "1",
                    "price": "250.00",
                    "discount": "0.00",
                    "associatedItems": [],
                    "bundled": "false",
                    "tax": null,
                    "taxable": "false",
                    "weight": null,
                    "vendor": "ecarttest",
                    "imageUrl": null,
                    "ecartapiUrl": "https://eshop-deve.herokuapp.com/api/v2/products/4591541944460"
                }
            ],
            "packages": [],
            "meta": null,
            "dates": {
                "canceledAt": null,
                "closedAt": null,
                "createdAt": "2022-01-19T19:53:36-05:00",
                "updatedAt": "2022-01-19T19:53:37-05:00",
                "paidAt": "2022-01-19T19:53:36-05:00"
            },
            "cancelReason": null,
            "note": null,
            "locations": [],
            "checkoutId": null,
            "partialFulfillment": null
        },
        {
            "id": "3953537843340",
            "number": "1276",
            "marketPlaceId": null,
            "groupId": null,
            "name": "#1276",
            "email": null,
            "fulfillmentStatus": {
                "id": null,
                "status": null,
                "ecartapi": "unfulfilled",
                "ecartapiId": "3",
                "partiallAvailable": "true"
            },
            "currency": "MXN",
            "totals": {
                "subtotal": "240.00",
                "total": "340.00",
                "tax": "100.00",
                "discount": "10.00",
                "weight": null,
                "shipping": "0.00"
            },
            "taxesIncluded": "false",
            "taxLines": [],
            "units": {
                "weight": "kg"
            },
            "status": {
                "id": null,
                "status": "any",
                "financial": "paid",
                "ecartapi": "paid",
                "ecartapiId": "1"
            },
            "locationId": null,
            "reference": null,
            "tags": [
                "imported"
            ],
            "payment": {
                "method": null,
                "status": "paid"
            },
            "customer": {},
            "billingAddress": {
                "id": null,
                "firstName": "Alex",
                "lastName": "de la Cruz",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "shippingMethod": null,
            "shippingLabel": null,
            "shippingAddress": {
                "id": null,
                "firstName": "John",
                "lastName": "Silver",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "items": [
                {
                    "id": "10204144205964",
                    "variantId": "33732617797772",
                    "productId": "4591541944460",
                    "offerId": null,
                    "sku": "TEST1",
                    "fulfillment": {
                        "quantity": "1",
                        "service": "manual",
                        "status": null
                    },
                    "name": "Camisa manga larga - M",
                    "upc": null,
                    "requiresShipping": "true",
                    "quantity": "1",
                    "price": "250.00",
                    "discount": "0.00",
                    "associatedItems": [],
                    "bundled": "false",
                    "tax": null,
                    "taxable": "false",
                    "weight": null,
                    "vendor": "ecarttest",
                    "imageUrl": null,
                    "ecartapiUrl": "https://eshop-deve.herokuapp.com/api/v2/products/4591541944460"
                }
            ],
            "packages": [],
            "meta": null,
            "dates": {
                "canceledAt": null,
                "closedAt": null,
                "createdAt": "2022-01-19T19:53:34-05:00",
                "updatedAt": "2022-01-19T19:53:35-05:00",
                "paidAt": "2022-01-19T19:53:34-05:00"
            },
            "cancelReason": null,
            "note": null,
            "locations": [],
            "checkoutId": null,
            "partialFulfillment": null
        },
        {
            "id": "3953537679500",
            "number": "1275",
            "marketPlaceId": null,
            "groupId": null,
            "name": "#1275",
            "email": null,
            "fulfillmentStatus": {
                "id": null,
                "status": null,
                "ecartapi": "unfulfilled",
                "ecartapiId": "3",
                "partiallAvailable": "true"
            },
            "currency": "MXN",
            "totals": {
                "subtotal": "240.00",
                "total": "340.00",
                "tax": "100.00",
                "discount": "10.00",
                "weight": null,
                "shipping": "0.00"
            },
            "taxesIncluded": "false",
            "taxLines": [],
            "units": {
                "weight": "kg"
            },
            "status": {
                "id": null,
                "status": "any",
                "financial": "paid",
                "ecartapi": "paid",
                "ecartapiId": "1"
            },
            "locationId": null,
            "reference": null,
            "tags": [
                "imported"
            ],
            "payment": {
                "method": null,
                "status": "paid"
            },
            "customer": {},
            "billingAddress": {
                "id": null,
                "firstName": "Alex",
                "lastName": "de la Cruz",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "shippingMethod": null,
            "shippingLabel": null,
            "shippingAddress": {
                "id": null,
                "firstName": "John",
                "lastName": "Silver",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "items": [
                {
                    "id": "10204143681676",
                    "variantId": "33732617797772",
                    "productId": "4591541944460",
                    "offerId": null,
                    "sku": "TEST1",
                    "fulfillment": {
                        "quantity": "1",
                        "service": "manual",
                        "status": null
                    },
                    "name": "Camisa manga larga - M",
                    "upc": null,
                    "requiresShipping": "true",
                    "quantity": "1",
                    "price": "250.00",
                    "discount": "0.00",
                    "associatedItems": [],
                    "bundled": "false",
                    "tax": null,
                    "taxable": "false",
                    "weight": null,
                    "vendor": "ecarttest",
                    "imageUrl": null,
                    "ecartapiUrl": "https://eshop-deve.herokuapp.com/api/v2/products/4591541944460"
                }
            ],
            "packages": [],
            "meta": null,
            "dates": {
                "canceledAt": null,
                "closedAt": null,
                "createdAt": "2022-01-19T19:53:13-05:00",
                "updatedAt": "2022-01-19T19:53:13-05:00",
                "paidAt": "2022-01-19T19:53:13-05:00"
            },
            "cancelReason": null,
            "note": null,
            "locations": [],
            "checkoutId": null,
            "partialFulfillment": null
        },
        {
            "id": "3953537646732",
            "number": "1274",
            "marketPlaceId": null,
            "groupId": null,
            "name": "#1274",
            "email": null,
            "fulfillmentStatus": {
                "id": null,
                "status": null,
                "ecartapi": "unfulfilled",
                "ecartapiId": "3",
                "partiallAvailable": "true"
            },
            "currency": "MXN",
            "totals": {
                "subtotal": "240.00",
                "total": "340.00",
                "tax": "100.00",
                "discount": "10.00",
                "weight": null,
                "shipping": "0.00"
            },
            "taxesIncluded": "false",
            "taxLines": [],
            "units": {
                "weight": "kg"
            },
            "status": {
                "id": null,
                "status": "any",
                "financial": "paid",
                "ecartapi": "paid",
                "ecartapiId": "1"
            },
            "locationId": null,
            "reference": null,
            "tags": [
                "imported"
            ],
            "payment": {
                "method": null,
                "status": "paid"
            },
            "customer": {},
            "billingAddress": {
                "id": null,
                "firstName": "Alex",
                "lastName": "de la Cruz",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "shippingMethod": null,
            "shippingLabel": null,
            "shippingAddress": {
                "id": null,
                "firstName": "John",
                "lastName": "Silver",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "items": [
                {
                    "id": "10204143648908",
                    "variantId": "33732617797772",
                    "productId": "4591541944460",
                    "offerId": null,
                    "sku": "TEST1",
                    "fulfillment": {
                        "quantity": "1",
                        "service": "manual",
                        "status": null
                    },
                    "name": "Camisa manga larga - M",
                    "upc": null,
                    "requiresShipping": "true",
                    "quantity": "1",
                    "price": "250.00",
                    "discount": "0.00",
                    "associatedItems": [],
                    "bundled": "false",
                    "tax": null,
                    "taxable": "false",
                    "weight": null,
                    "vendor": "ecarttest",
                    "imageUrl": null,
                    "ecartapiUrl": "https://eshop-deve.herokuapp.com/api/v2/products/4591541944460"
                }
            ],
            "packages": [],
            "meta": null,
            "dates": {
                "canceledAt": null,
                "closedAt": null,
                "createdAt": "2022-01-19T19:53:11-05:00",
                "updatedAt": "2022-01-19T19:53:12-05:00",
                "paidAt": "2022-01-19T19:53:11-05:00"
            },
            "cancelReason": null,
            "note": null,
            "locations": [],
            "checkoutId": null,
            "partialFulfillment": null
        },
        {
            "id": "3953537450124",
            "number": "1273",
            "marketPlaceId": null,
            "groupId": null,
            "name": "#1273",
            "email": null,
            "fulfillmentStatus": {
                "id": null,
                "status": null,
                "ecartapi": "unfulfilled",
                "ecartapiId": "3",
                "partiallAvailable": "true"
            },
            "currency": "MXN",
            "totals": {
                "subtotal": "240.00",
                "total": "340.00",
                "tax": "100.00",
                "discount": "10.00",
                "weight": null,
                "shipping": "0.00"
            },
            "taxesIncluded": "false",
            "taxLines": [],
            "units": {
                "weight": "kg"
            },
            "status": {
                "id": null,
                "status": "any",
                "financial": "paid",
                "ecartapi": "paid",
                "ecartapiId": "1"
            },
            "locationId": null,
            "reference": null,
            "tags": [
                "imported"
            ],
            "payment": {
                "method": null,
                "status": "paid"
            },
            "customer": {},
            "billingAddress": {
                "id": null,
                "firstName": "Alex",
                "lastName": "de la Cruz",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "shippingMethod": null,
            "shippingLabel": null,
            "shippingAddress": {
                "id": null,
                "firstName": "John",
                "lastName": "Silver",
                "dni": null,
                "address1": "123 Fake Street",
                "address2": null,
                "address3": null,
                "country": {
                    "code": "CA",
                    "name": "Canada",
                    "codeIso2": "CA",
                    "codeIso3": "CAN"
                },
                "state": {
                    "code": "ON",
                    "name": "Ontario",
                    "codeIso2": null,
                    "codeIso3": null
                },
                "city": "Fakecity",
                "postalCode": "K2P 1L4",
                "phone": "555-555-5555",
                "email": null,
                "company": "envia.com",
                "references": null
            },
            "items": [
                {
                    "id": "10204143353996",
                    "variantId": "33732617797772",
                    "productId": "4591541944460",
                    "offerId": null,
                    "sku": "TEST1",
                    "fulfillment": {
                        "quantity": "1",
                        "service": "manual",
                        "status": null
                    },
                    "name": "Camisa manga larga - M",
                    "upc": null,
                    "requiresShipping": "true",
                    "quantity": "1",
                    "price": "250.00",
                    "discount": "0.00",
                    "associatedItems": [],
                    "bundled": "false",
                    "tax": null,
                    "taxable": "false",
                    "weight": null,
                    "vendor": "ecarttest",
                    "imageUrl": null,
                    "ecartapiUrl": "https://eshop-deve.herokuapp.com/api/v2/products/4591541944460"
                }
            ],
            "packages": [],
            "meta": null,
            "dates": {
                "canceledAt": null,
                "closedAt": null,
                "createdAt": "2022-01-19T19:52:40-05:00",
                "updatedAt": "2022-01-19T19:52:40-05:00",
                "paidAt": "2022-01-19T19:52:40-05:00"
            },
            "cancelReason": null,
            "note": null,
            "locations": [],
            "checkoutId": null,
            "partialFulfillment": null
        }
    ],
    "page": {
        "next": null,
        "previous": null
    }
}