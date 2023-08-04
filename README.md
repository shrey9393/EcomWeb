# E-Commerce Frontend README

## Introduction

Welcome to the frontend of the E-Commerce Website Project! This is the client-side of the application, built using React, Redux Toolkit for state management, and Tailwind CSS for styling. The purpose of this project is to provide an interactive and user-friendly interface for customers to browse and purchase products.

## Features

This frontend application comes with a range of features, including but not limited to:

- **Product Listing:** Displaying a list of products with their details.
- **Product Details:** Showing detailed information about a selected product.
- **User Authentication:** Allowing users to log in, sign up, and log out.
- **Shopping Cart:** Allowing users to add products to the cart, update quantities, and proceed to checkout.
- **Search and Filtering:** Enabling users to search for products and filter them by category, price range, etc.
- **Responsive Design:** Ensuring that the website is fully responsive and works on various devices.

## Images
### Login and SignUp

![image](https://github.com/shrey9393/EcomWeb/assets/80638949/776db0a4-1b3b-4736-be07-c592a9bcca1f)


### Home Page
![image](https://github.com/shrey9393/EcomWeb/assets/80638949/b250056c-2217-491d-9038-aa3364620f37)


The Home Page serves as the landing page for the E-Commerce website. It displays a list of featured products with their names, prices, and images. Customers can easily navigate through the products and click on any product to view its details.

### Product Details Page
![image](https://github.com/shrey9393/EcomWeb/assets/80638949/63f119de-9f5e-4f33-abe4-e9fb8726cd53)


The Product Details Page provides comprehensive information about a specific product. It includes the product name, description, price, images, and any other relevant details. Customers can select the quantity they want and add the product to their cart from this page.

### Cart Page
![image](https://github.com/shrey9393/EcomWeb/assets/80638949/843435ad-59c6-4f6e-8bf3-d31692f0a1d8)


The Cart Page displays the products that the customer has added to their shopping cart. It shows the product names, quantities, prices, and subtotal for each item. Customers can update the quantity or remove products from the cart. They can proceed to checkout from this page.

### Checkout Page

![image](https://github.com/shrey9393/EcomWeb/assets/80638949/e5fa211e-252d-405c-96dc-4dd59e01e48d)

The Checkout Page allows customers to review their order before finalizing the purchase. It shows the order summary, including product names, quantities, and total amount. Customers can provide their shipping and payment information to complete the purchase.

![image](https://github.com/shrey9393/EcomWeb/assets/80638949/f0b7c69b-5e4f-4966-a5af-c562a0b33b60)

## Technologies Used

- **React:** For building the user interface and components.
- **Redux Toolkit:** For managing the application's state and data flow.
- **Tailwind CSS:** For responsive and utility-first CSS styling.

## Installation

To install and run this frontend application on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/e-commerce-frontend.git`
2. Navigate to the project directory: `cd e-commerce-frontend`
3. Install the dependencies: `npm install`

## Configuration

Before running the application, make sure to configure the necessary information:

1. **API Endpoint:** In the `src/utils/api.js` file, set the `API_BASE_URL` variable to the backend API endpoint. For example:
   ```javascript
   export const API_BASE_URL = "http://localhost:5000/api";
   ```

## Usage

To start the development server and use the application, follow these steps:

1. Start the development server:

   ```bash
   npm start
   ```

   The application will run on `http://localhost:3000` by default.

2. Open your web browser and navigate to `http://localhost:3000`.

3. You can now interact with the E-Commerce frontend application.

## Folder Structure

```
e-commerce-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── store/
│   ├── utils/
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── ...
```

## Contributing

Contributions to this frontend project are welcome! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Create a pull request.
