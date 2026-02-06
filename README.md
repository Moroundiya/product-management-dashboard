<h3>Product Management Dashboard </h3>

A modern dashboard application built with Next.js (App Router), Tailwind CSS, Material UI, Redux Toolkit, MockAPI, and HeroUI.
This project supports full CRUD operations, image uploads, sorting, searching, and real-time UI updates without page refresh.

<h3>Features</h3>

<ul>
  <li>Product listing with pagination</li>
  <li>View single product details</li>
  <li>Add, edit, and delete products</li>
  <li>Search and sort products (Latest, Oldest, A–Z)</li>
  <li>Redux state management</li>
  <li>MockAPI backend</li>
  <li>Responsive UI</li>
  <li>Instant UI updates without page reload</li>
</ul>

<h3>Tech Stack </h3>

<ul>
  <li>Next.js 13+ (App Router)</li>
  <li>React</li>
  <li>Redux Toolkit</li>
  <li>Axios</li>
  <li>Next.js 13+ (App Router)</li>
  <li>MockAPI</li>
  <li>Tailwind CSS</li>
  <li>Material UI</li>
  <li>HeroUI</li>
</ul>

<h3>Setup</h3>

Make sure the following tools are installed on your system:

```txt
● Node.js (v18 or higher recommended)
● npm (comes with Node.js)
● Git
```

Check versions (optional):
node -v
npm -v
git --version

<h3>Getting Started (Local Setup)</h3>

```txt
● Clone the Repository
git clone https://github.com/your-username/your-repo-name.git

● Navigate into the project directory:
cd your-repo-name

● Install Dependencies
npm install
```

This installs all required packages.

<h3>Run the Project Locally</h3>

Start the development server:
npm run dev

<h3>Open your browser and visit:</h3>
    http://localhost:3000

<h3> Folder Structure (Overview) </h3>

```txt
app/
 ├─ (dashboard)
 │   └─ product/
 │       └─ [slug]/page.tsx
 ├─ api/
 │   └─ addproduct/
 │       └─ route.ts
 │   └─ getproducts/
 │       └─ route.ts
 ├─ components/
 ├─ layouts/
 ├─ redux/
 ├─ lib/
 └─ page.tsx
```

<h3>ScreenShots</h3>

<p align="center">
  <img src="/public/images/products.png" width="900" />
</p>

<p align="center">
   <img src="/public/images/product-details.png" width="900" />
</p>

<p align="center">
   <img src="/public/images/add-product.png" width="900" />
</p>

<p align="center">
   <img src="/public/images/products-mobile.png" width="500" />
</p>
<p align="center">
   <img src="/public/images/single-product-mobile.png" width="500" />
</p>
