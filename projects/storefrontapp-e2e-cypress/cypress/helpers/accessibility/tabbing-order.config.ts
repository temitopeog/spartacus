import { TabElement } from './tabbing-order';

export enum TabbingOrderTypes {
  FORM_FIELD = 'formField',
  LINK = 'link',
  BUTTON = 'button',
  NG_SELECT = 'ngSelect',
  GENERIC_CHECKBOX = 'genericCheckbox',
  CHECKBOX_WITH_LABEL = 'checkboxWithLabel',
  IMG_LINK = 'imgLink',
  GENERIC_INPUT = 'genericInput',
  GENERIC_BUTTON = 'genericButton',
  GENERIC_NG_SELECT = 'genericNgSelect',
  ITEM_COUNTER = 'itemCounter',
  RADIO = 'radio',
  SELECT = 'select',
  NAV_CATEGORY_DROPDOWN = 'navCategoryDropdown',
  CAROUSEL = 'carousel',
  CX_MEDIA = 'cxMedia',
  H3 = 'h3',
  CX_PRODUCT_VIEW = 'cxProductView',
  INDEX_OF_ELEMENT = 'indexOfElement',
}

export interface TabbingOrderConfig {
  [name: string]: TabElement[];
}

export const tabbingOrderConfig: TabbingOrderConfig = {
  home: [
    {
      value:
        '/electronics-spa/en/USD/OpenCatalogue/Cameras/Digital-Cameras/Digital-SLR/c/578',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value:
        '/electronics-spa/en/USD/Open-Catalogue/Cameras/Camera-Accessories-%2526-Supplies/c/585',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value:
        '/electronics-spa/en/USD/Open-Catalogue/Cameras/DigitalCameras/Digital-Compacts/c/576',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value:
        '/electronics-spa/en/USD/Open-Catalogue/Cameras/CameraAccessories-%2526-Supplies/CameraLenses/c/588',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value:
        '/electronics-spa/en/USD/Open-Catalogue/Cameras/Hand-held-Camcorders/c/584',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value:
        '/electronics-spa/en/USD/Open-Catalogue/Components/PowerSupplies/c/816',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value:
        '/electronics-spa/en/USD/product/300938/Photosmart%20E317%20Digital%20Camera',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: '/electronics-spa/en/USD/product/358639/DSC-N1',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: '/electronics-spa/en/USD/product/553637/NV10',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: '/electronics-spa/en/USD/product/816802/Cyber-shot%20W55',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: '/electronics-spa/en/USD/product/1934793/PowerShot%20A480',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value:
        '/electronics-spa/en/USD/product/1382080/EOS450D%20%2B%2018-55%20IS%20Kit',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: '/electronics-spa/en/USD/product/1981415/PL60%20Silver',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: '/electronics-spa/en/USD/product/816780/DSLR-A100H',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: '/electronics-spa/en/USD/product/1934406/HDR-CX105E%20%20Red',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: '/electronics-spa/en/USD/product/1986316/LEGRIA%20HF%20S100',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value:
        '/electronics-spa/en/USD/product/592506/AV%20Cable,%20Model%20AV-8',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: '/electronics-spa/en/USD/product/1776948/Camileo%20S10%20EU',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: '/electronics-spa/en/USD/product/1934796/PowerShot%20A480',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: '/electronics-spa/en/USD/product/1981415/PL60%20Silver',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: '/electronics-spa/en/USD/product/1992693/DSC-T90',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: '/electronics-spa/en/USD/product/2278102/miniDV%20Head%20Cleaner',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: '/electronics-spa/en/USD/product/1641905/32GB%20SDHC%20Card',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: '/electronics-spa/en/USD/product/932577/Digital%20Camera%20Tripod',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value:
        '/electronics-spa/en/USD/Open-Catalogue/Cameras/Webcams/Web-Camera-%2528100KpixelM-CMOS%252C-640X480%252C-USB-1-1%2529-Black/p/280916',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value:
        '/electronics-spa/en/USD/Open-Catalogue/Cameras/Webcams/QuickCam-for-Notebooks-Pro/p/479742',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value:
        '/electronics-spa/en/USD/Open-Catalogue/Cameras/DigitalCameras/Digital-Compacts/NV10/p/553637',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value:
        '/electronics-spa/en/USD/Open-Catalogue/Cameras/CameraAccessories-%2526-Supplies/CameraFlashes/Light-HVL-20DW2/p/289540',
      type: TabbingOrderTypes.IMG_LINK,
    },
    { value: '/electronics-spa/en/USD/faq', type: TabbingOrderTypes.IMG_LINK },
  ],
  login: [
    { value: 'userId', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'password', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'Forgot password?', type: TabbingOrderTypes.LINK },
    { value: 'Sign In', type: TabbingOrderTypes.BUTTON },
    { value: 'Register', type: TabbingOrderTypes.BUTTON },
  ],
  register: [
    { value: 'titleCode', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'firstName', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'lastName', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'email', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'password', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'passwordconf', type: TabbingOrderTypes.FORM_FIELD },
    {
      value: 'termsandconditions',
      type: TabbingOrderTypes.FORM_FIELD,
    },
    { value: 'Terms & Conditions', type: TabbingOrderTypes.LINK },
    { value: 'Register', type: TabbingOrderTypes.BUTTON },
    {
      value: 'I already have an account. Sign In',
      type: TabbingOrderTypes.LINK,
    },
  ],
  resetPassword: [
    { value: 'userEmail', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'Submit', type: TabbingOrderTypes.BUTTON },
    { value: 'Cancel', type: TabbingOrderTypes.BUTTON },
  ],
  cart: [
    {
      value: 'FUN Flash Single Use Camera, 27+12 pic',
      type: TabbingOrderTypes.LINK,
    },
    { value: 'quantity', type: TabbingOrderTypes.ITEM_COUNTER },
    { value: '-', type: TabbingOrderTypes.BUTTON },
    { type: TabbingOrderTypes.GENERIC_INPUT },
    { value: '+', type: TabbingOrderTypes.BUTTON },
    { value: 'Remove', type: TabbingOrderTypes.LINK },
    {
      value: 'Proceed to Checkout',
      type: TabbingOrderTypes.BUTTON,
    },
  ],
  changePassword: [
    {
      value: 'oldPassword',
      type: TabbingOrderTypes.FORM_FIELD,
    },
    {
      value: 'newPassword',
      type: TabbingOrderTypes.FORM_FIELD,
    },
    {
      value: 'newPasswordConfirm',
      type: TabbingOrderTypes.FORM_FIELD,
    },
  ],
  updateEmail: [
    { value: 'email', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'confirmEmail', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'password', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'Cancel', type: TabbingOrderTypes.BUTTON },
    { value: 'Save', type: TabbingOrderTypes.BUTTON },
  ],
  footer: [
    {
      value: 'About SAP Commerce Cloud',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Frequently Asked Questions',
      type: TabbingOrderTypes.LINK,
    },
    { value: 'Visit SAP', type: TabbingOrderTypes.LINK },
    { value: 'Contact Us', type: TabbingOrderTypes.LINK },
    {
      value: 'Agile Commerce Blog',
      type: TabbingOrderTypes.LINK,
    },
    { value: 'Linked In', type: TabbingOrderTypes.LINK },
    { value: 'Facebook', type: TabbingOrderTypes.LINK },
    { value: 'Twitter', type: TabbingOrderTypes.LINK },
  ],
  closeAccount: [
    { value: 'Cancel', type: TabbingOrderTypes.LINK },
    { value: 'CLOSE MY ACCOUNT', type: TabbingOrderTypes.BUTTON },
  ],
  personalDetails: [
    { value: 'titleCode', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'firstName', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'lastName', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'Cancel', type: TabbingOrderTypes.BUTTON },
    { value: 'Save', type: TabbingOrderTypes.BUTTON },
  ],
  paymentDetails: [
    { value: 'Delete', type: TabbingOrderTypes.LINK },
    { value: 'Set as default', type: TabbingOrderTypes.LINK },
    { value: 'Delete', type: TabbingOrderTypes.LINK },
  ],
  addressBookForm: [
    {
      value: 'isocode',
      type: TabbingOrderTypes.NG_SELECT,
    },
    {
      value: 'titleCode',
      type: TabbingOrderTypes.NG_SELECT,
    },
    {
      value: 'firstName',
      type: TabbingOrderTypes.FORM_FIELD,
    },
    {
      value: 'lastName',
      type: TabbingOrderTypes.FORM_FIELD,
    },
    {
      value: 'line1',
      type: TabbingOrderTypes.FORM_FIELD,
    },
    {
      value: 'line2',
      type: TabbingOrderTypes.FORM_FIELD,
    },
    {
      value: 'town',
      type: TabbingOrderTypes.FORM_FIELD,
    },
    {
      value: 'isocode',
      type: TabbingOrderTypes.NG_SELECT,
    },
    {
      value: 'postalCode',
      type: TabbingOrderTypes.FORM_FIELD,
    },
    {
      value: 'phone',
      type: TabbingOrderTypes.FORM_FIELD,
    },
    {
      value: 'defaultAddress',
      type: TabbingOrderTypes.FORM_FIELD,
    },
    {
      value: 'Back to address list',
      type: TabbingOrderTypes.BUTTON,
    },
    {
      value: 'Add address',
      type: TabbingOrderTypes.BUTTON,
    },
  ],
  addressBookDirectory: [
    {
      value: 'Add new address',
      type: TabbingOrderTypes.BUTTON,
    },
    {
      value: 'Edit',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Delete',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Set as default',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Edit',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Delete',
      type: TabbingOrderTypes.LINK,
    },
  ],
  consentManagement: [
    {
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
      value:
        'This is a sample marketing consent description that will need to be updated or replaced, based on the valid registration consent required.',
    },
    {
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
      value:
        'This is a sample persionalization consent description that will need to be updated or replaced.',
    },
    {
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
      value:
        'This is a sample store user information consent description that will need to be updated or replaced.',
    },
  ],
  addToCart: [
    { value: 'view cart', type: TabbingOrderTypes.BUTTON },
    {
      value: 'proceed to checkout',
      type: TabbingOrderTypes.BUTTON,
    },
    { type: TabbingOrderTypes.GENERIC_BUTTON },
    {
      value: 'FUN Flash Single Use Camera, 27+12 pic',
      type: TabbingOrderTypes.LINK,
    },
    { value: 'quantity', type: TabbingOrderTypes.ITEM_COUNTER },
    { value: '-', type: TabbingOrderTypes.BUTTON },
    { type: TabbingOrderTypes.GENERIC_INPUT },
    { value: '+', type: TabbingOrderTypes.BUTTON },
    { value: 'Remove', type: TabbingOrderTypes.LINK },
    { value: 'view cart', type: TabbingOrderTypes.BUTTON },
  ],
  shippingAddressNew: [
    { value: 'isocode', type: TabbingOrderTypes.GENERIC_INPUT },
    { value: 'titleCode', type: TabbingOrderTypes.GENERIC_INPUT },
    { value: 'firstName', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'lastName', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'line1', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'line2', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'town', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'isocode', type: TabbingOrderTypes.GENERIC_INPUT },
    { value: 'postalCode', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'phone', type: TabbingOrderTypes.FORM_FIELD },
    {
      value: 'Set as default',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    { value: 'Back to cart', type: TabbingOrderTypes.BUTTON },
    { value: 'Continue', type: TabbingOrderTypes.BUTTON },
  ],
  shippingAddressExisting: [
    { value: 'Add New Address', type: TabbingOrderTypes.BUTTON },
    {
      value: 'Ship to this address',
      type: TabbingOrderTypes.LINK,
    },
    { value: 'Back to cart', type: TabbingOrderTypes.BUTTON },
    { value: 'Continue', type: TabbingOrderTypes.BUTTON },
  ],
  deliveryMode: [
    { value: 'deliveryModeId', type: TabbingOrderTypes.RADIO },
    { value: 'deliveryModeId', type: TabbingOrderTypes.RADIO },
    { value: 'Back', type: TabbingOrderTypes.BUTTON },
    { value: 'Continue', type: TabbingOrderTypes.BUTTON },
  ],
  orderHistoryNoOrders: [
    { value: 'Start Shopping', type: TabbingOrderTypes.BUTTON },
  ],
  paymentDetailsCard: [
    { type: TabbingOrderTypes.GENERIC_INPUT },
    {
      value: 'accountHolderName',
      type: TabbingOrderTypes.FORM_FIELD,
    },
    { value: 'cardNumber', type: TabbingOrderTypes.FORM_FIELD },
    { type: TabbingOrderTypes.GENERIC_INPUT },
    { type: TabbingOrderTypes.GENERIC_INPUT },
    { value: 'cvn', type: TabbingOrderTypes.FORM_FIELD },
    {
      value: 'Set as default',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Same as shipping address',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    { value: 'Back', type: TabbingOrderTypes.BUTTON },
    { value: 'Continue', type: TabbingOrderTypes.BUTTON },
  ],
  paymentDetailsBillingAddress: [
    { type: TabbingOrderTypes.GENERIC_INPUT },
    { value: 'firstName', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'lastName', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'line1', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'line2', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'town', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'isocodeShort', type: TabbingOrderTypes.NG_SELECT },
    { value: 'postalCode', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'Back', type: TabbingOrderTypes.BUTTON },
    { value: 'Continue', type: TabbingOrderTypes.BUTTON },
  ],
  orderDetails: [
    {
      value: 'Alpha 350',
      type: TabbingOrderTypes.LINK,
    },
  ],
  headerDesktopNotLoggedIn: [
    {
      value: 'Language',
      type: TabbingOrderTypes.SELECT,
    },
    {
      value: 'Currency',
      type: TabbingOrderTypes.SELECT,
    },
    {
      value: 'Find a Store',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Sale',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Contact Us',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Help',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '/electronics-spa/en/USD/',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      type: TabbingOrderTypes.GENERIC_INPUT,
    },
    {
      value: 'Sign In / Register',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '/electronics-spa/en/USD/cart',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: 'Brands',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Shop all Brands >',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Cameras',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Canon',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Sony',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Kodak',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Samsung',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Toshiba',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Fujifilm',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Accessories',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Kingston',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Icidu',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'TDK',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Sweex',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Digital Cameras',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Shop all Digital Cameras >',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Compact Cameras',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'SLR Cameras',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Film Cameras',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Camcorders',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Webcams',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Accessories',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Shop all Accessories >',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Gear',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Camera Flashes',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Tripods',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Camera Lenses',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Flash Memory',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Power Supplies',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Supplies',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Color Films',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Black & White Films',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Blank Videotapes',
      type: TabbingOrderTypes.LINK,
    },
  ],
  headerDesktopLoggedIn: [
    {
      value: 'Language',
      type: TabbingOrderTypes.SELECT,
    },
    {
      value: 'Currency',
      type: TabbingOrderTypes.SELECT,
    },
    {
      value: 'Find a Store',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Sale',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Contact Us',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Help',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '/electronics-spa/en/USD/',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      type: TabbingOrderTypes.GENERIC_INPUT,
    },
    {
      value: 'My Account',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Order History',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Address Book',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Payment Details',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Personal Details',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Password',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Email Address',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Consent Management',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Close Account',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Sign Out',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '/electronics-spa/en/USD/cart',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: 'Brands',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Shop all Brands >',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Cameras',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Canon',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Sony',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Kodak',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Samsung',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Toshiba',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Fujifilm',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Accessories',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Kingston',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Icidu',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'TDK',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Sweex',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Digital Cameras',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Shop all Digital Cameras >',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Compact Cameras',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'SLR Cameras',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Film Cameras',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Camcorders',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Webcams',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Accessories',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Shop all Accessories >',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Gear',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Camera Flashes',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Tripods',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Camera Lenses',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Flash Memory',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Power Supplies',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Supplies',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Color Films',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Black & White Films',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Blank Videotapes',
      type: TabbingOrderTypes.LINK,
    },
  ],
  checkoutReviewOrder: [
    { value: 'Edit shipping address', type: TabbingOrderTypes.LINK },
    { value: 'Edit shipping method', type: TabbingOrderTypes.LINK },
    { value: 'Edit payment method', type: TabbingOrderTypes.LINK },
    {
      value: 'FUN Flash Single Use Camera, 27+12 pic',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'I am confirming that I have read and agreed with',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    { value: 'Terms & Conditions', type: TabbingOrderTypes.LINK },
    { value: 'Place Order', type: TabbingOrderTypes.BUTTON },
  ],
  productPage: [
    {
      value: 'FUN Flash Single Use Camera, 27+12 pic',
      type: TabbingOrderTypes.CX_MEDIA,
    },
    {
      value: 'FUN Flash Single Use Camera, 27+12 pic',
      type: TabbingOrderTypes.CX_MEDIA,
    },
    { value: 'Show reviews', type: TabbingOrderTypes.LINK },
    { value: 'quantity', type: TabbingOrderTypes.ITEM_COUNTER },
    { value: '-', type: TabbingOrderTypes.BUTTON },
    { type: TabbingOrderTypes.GENERIC_INPUT },
    { value: '+', type: TabbingOrderTypes.BUTTON },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
  ],
  headerMobileNotLoggedIn: [
    {
      type: TabbingOrderTypes.GENERIC_BUTTON,
    },
    {
      value: '/electronics-spa/en/USD/',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      type: TabbingOrderTypes.GENERIC_INPUT,
    },
    {
      value: '/electronics-spa/en/USD/cart',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: 'Sign In / Register',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Brands',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Shop all Brands >',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Cameras',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Canon',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Sony',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Kodak',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Samsung',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Toshiba',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Fujifilm',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Accessories',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Kingston',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Icidu',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'TDK',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Sweex',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Digital Cameras',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Shop all Digital Cameras >',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Compact Cameras',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'SLR Cameras',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Film Cameras',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Camcorders',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Webcams',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Accessories',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Shop all Accessories >',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Gear',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Camera Flashes',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Tripods',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Camera Lenses',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Flash Memory',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Power Supplies',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Supplies',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Color Films',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Black & White Films',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Blank Videotapes',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Language',
      type: TabbingOrderTypes.SELECT,
    },
    {
      value: 'Currency',
      type: TabbingOrderTypes.SELECT,
    },
    {
      value: 'Find a Store',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Sale',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Contact Us',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Help',
      type: TabbingOrderTypes.LINK,
    },
  ],
  headerMobileLoggedIn: [
    {
      type: TabbingOrderTypes.GENERIC_BUTTON,
    },
    {
      value: '/electronics-spa/en/USD/',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      type: TabbingOrderTypes.GENERIC_INPUT,
    },
    {
      value: '/electronics-spa/en/USD/cart',
      type: TabbingOrderTypes.IMG_LINK,
    },
    {
      value: 'My Account',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Order History',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Address Book',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Payment Details',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Personal Details',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Password',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Email Address',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Consent Management',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Close Account',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Sign Out',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Brands',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Shop all Brands >',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Cameras',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Canon',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Sony',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Kodak',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Samsung',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Toshiba',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Fujifilm',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Accessories',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Kingston',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Icidu',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'TDK',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Sweex',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Digital Cameras',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Shop all Digital Cameras >',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Compact Cameras',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'SLR Cameras',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Film Cameras',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Camcorders',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Webcams',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Accessories',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Shop all Accessories >',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Gear',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Camera Flashes',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Tripods',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Camera Lenses',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Flash Memory',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Power Supplies',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Supplies',
      type: TabbingOrderTypes.NAV_CATEGORY_DROPDOWN,
    },
    {
      value: 'Color Films',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Black & White Films',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Blank Videotapes',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Language',
      type: TabbingOrderTypes.SELECT,
    },
    {
      value: 'Currency',
      type: TabbingOrderTypes.SELECT,
    },
    {
      value: 'Find a Store',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Sale',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Contact Us',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Help',
      type: TabbingOrderTypes.LINK,
    },
  ],
  productListDesktop: [
    {
      value: 'Stores',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Chiba (100)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Choshi (92)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Fukuoka Best Western Fukuoka Nakasu Inn (102)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Fukuoka Canal City Fukuoka Washington Hotel (89)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Fukuoka Hilton Fukuoka Sea Hawk (94)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Fukuoka Hotel Monterey La Soeur Fukuoka (91)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Show more...',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Price',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '$0-$49.99 (38)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '$50-$199.99 (63)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '$200-$499.99 (38)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '$500-$999.99 (22)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '$1,000-$100,000 (18)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Resolution',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '1280 x 720 (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Mounting',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Floor-standing (2)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Quick-release Mounting Shoe (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Megapixels',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '20 - 29.9 mp (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '15 - 15.9 mp (8)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '14 - 14.9 mp (4)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '12 - 12.9 mp (6)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '10 - 10.9 mp (30)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '9 - 9.9 mp (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Show more...',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Lens type',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'fixed (6)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'telephoto (2)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'fisheye (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'wide-angle (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'zoom (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Color',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Black (7)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Brand',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Sony (86)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Canon (40)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Kodak (23)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Kingston (7)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Samsung (6)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Toshiba (4)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Show more...',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Category',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: 'Cameras (131)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Digital Cameras (97)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Digital SLR (50)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Digital Compacts (47)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Components (30)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Power Supplies (30)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Show more...',
      type: TabbingOrderTypes.LINK,
    },
    {
      type: TabbingOrderTypes.GENERIC_INPUT,
    },
    {
      value: '«',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '1',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '2',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '3',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '18',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '»',
      type: TabbingOrderTypes.LINK,
    },
    {
      type: TabbingOrderTypes.CX_PRODUCT_VIEW,
    },
    {
      value: ['.cx-product-name', 0],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      value: ['.cx-product-name', 1],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      value: ['.cx-product-name', 2],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      value: ['.cx-product-name', 3],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      value: ['.cx-product-name', 4],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      value: ['.cx-product-name', 5],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      value: ['.cx-product-name', 6],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      value: ['.cx-product-name', 7],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      value: ['.cx-product-name', 8],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      value: ['.cx-product-name', 9],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      type: TabbingOrderTypes.GENERIC_INPUT,
    },
    {
      value: '«',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '1',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '2',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '3',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '18',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '»',
      type: TabbingOrderTypes.LINK,
    },
    {
      type: TabbingOrderTypes.CX_PRODUCT_VIEW,
    },
  ],
  productListMobile: [
    {
      value: 'Filter by',
      type: TabbingOrderTypes.BUTTON,
    },
    {
      type: TabbingOrderTypes.GENERIC_BUTTON,
    },
    {
      type: TabbingOrderTypes.GENERIC_INPUT,
    },
    {
      value: '«',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '1',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '2',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '3',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '18',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '»',
      type: TabbingOrderTypes.LINK,
    },
    {
      type: TabbingOrderTypes.CX_PRODUCT_VIEW,
    },
    {
      value: ['.cx-product-name', 0],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      value: ['.cx-product-name', 1],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      value: ['.cx-product-name', 2],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      value: ['.cx-product-name', 3],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      value: ['.cx-product-name', 4],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      value: ['.cx-product-name', 5],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      value: ['.cx-product-name', 6],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      value: ['.cx-product-name', 7],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      value: ['.cx-product-name', 8],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      value: ['.cx-product-name', 9],
      type: TabbingOrderTypes.INDEX_OF_ELEMENT,
    },
    { value: 'Add to cart', type: TabbingOrderTypes.BUTTON },
    {
      type: TabbingOrderTypes.GENERIC_INPUT,
    },
    {
      value: '«',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '1',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '2',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '3',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '18',
      type: TabbingOrderTypes.LINK,
    },
    {
      value: '»',
      type: TabbingOrderTypes.LINK,
    },
    {
      type: TabbingOrderTypes.CX_PRODUCT_VIEW,
    },
  ],
  productListMobileFilters: [
    {
      type: TabbingOrderTypes.GENERIC_BUTTON,
    },
    {
      value: 'Chiba (100)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Choshi (92)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Fukuoka Best Western Fukuoka Nakasu Inn (102)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Fukuoka Canal City Fukuoka Washington Hotel (89)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Fukuoka Hilton Fukuoka Sea Hawk (94)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Fukuoka Hotel Monterey La Soeur Fukuoka (91)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Fukuoka Hotel Nikko Fukuoka (93)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Ichikawa (118)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Kawasaki Grand Hotel (92)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Kawasaki Hotel Sunroute Kawasaki (93)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Kawasaki Mets Kawasaki Hotel (99)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Kawasaki Mets Mizonokuchi Hotel (112)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Kawasaki Pearl Hotel Kawasaki (92)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Kobe Bay Sheraton Hotel and Towers (97)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Kobe Hotel Monterey Amalie (61)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Kobe Hotel Monterey Kobe (56)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Kobe Sannomiya Terminal Hotel (121)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Kobe the b (57)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Koto (100)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Matsudo (100)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Misato (90)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Nagoya Crowne Plaza Ana Grand Court Nagoya (96)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Nagoya Hilton Nagoya Hotel (98)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Nagoya Marriott Nagoya (99)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Nagoya Royal Park Inn Nagoya (95)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Nagoya The Westin Nagoya Castle (93)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Nakano (102)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Osaka Best Western Hotel Fino Osaka Shinsaibashi (94)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Osaka Cross Hotel Osaka (92)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Osaka Crowne Plaza Hotel Ana Osaka (96)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Osaka Hilton Osaka Hotel (92)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Osaka Ramada Osaka (98)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Sapporo Ana Hotel Sapporo (120)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Sapporo Best Western Hotel Sapporo Nakajima Koen (91)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Sapporo Hotel Resol Trinity Sapporo (99)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Sapporo Hotel Sunroute Sapporo (91)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Sapporo Sheraton Sapporo Hotel (98)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Shinbashi (101)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Tokio Cerulean Tower Tokyu Hotel (93)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Tokio Dormy Inn Tokyo Hatchobori (93)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Tokio Flexstay Nippori Inn (120)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Tokio Hotel Metropolitan Tokyo (94)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Tokio Park Hotel Tokyo (96)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Yokohama Comfort Hotel Yokohama Kannai (95)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Yokohama Hotel JAL City Kannai Yokohama (95)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Yokohama Hotel New Grand (121)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Yokohama Sakuragicho Washington Hotel (98)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Yokohama Shin Yokohama Prince Hotel (94)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Yokosuka (93)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '$0-$49.99 (38)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '$50-$199.99 (63)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '$200-$499.99 (38)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '$500-$999.99 (22)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '$1,000-$100,000 (18)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '1280 x 720 (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Floor-standing (2)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Quick-release Mounting Shoe (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '20 - 29.9 mp (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '15 - 15.9 mp (8)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '14 - 14.9 mp (4)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '12 - 12.9 mp (6)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '10 - 10.9 mp (30)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '9 - 9.9 mp (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '8 - 8.9 mp (6)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '7 - 7.9 mp (9)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: '5 - 5.9 mp (3)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'fixed (6)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'telephoto (2)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'fisheye (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'wide-angle (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'zoom (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Black (7)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Sony (86)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Canon (40)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Kodak (23)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Kingston (7)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Samsung (6)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Toshiba (4)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'ICIDU (3)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'TDK (2)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Sweex (2)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'HP (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'NEC (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Targus (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Canyon (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Fujifilm (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Logitech (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Cameras (131)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Digital Cameras (97)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Digital SLR (50)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Digital Compacts (47)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Components (30)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Power Supplies (30)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Camera Accessories & Supplies (22)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Data storage (16)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Flash Memory (16)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Rechargeable Batteries (13)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Camera Lenses (10)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Battery Chargers (9)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Camera Kits (8)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Tripods (8)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Power Adapters & Inverters (8)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Hand-held Camcorders (6)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Blank Video Tapes (5)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Webcams (4)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Camera Flashes (4)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Colour Films (4)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Black & White Films (4)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Camera Cables (4)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Binoculars (2)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Film cameras (2)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
    {
      value: 'Fixatives (1)',
      type: TabbingOrderTypes.CHECKBOX_WITH_LABEL,
    },
  ],
};