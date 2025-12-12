HomeHero – Local Household Service Finder


Live Link : https://hero-home-client.vercel.app/

HomeHero is a modern web application designed to help users find trusted local service providers such as electricians, plumbers, cleaners, and more. The system includes a complete booking flow, provider management, responsive UI, authentication, and a dynamic service listing powered by MongoDB.

🌐 Live Website

Client Live URL:
Server Live URL (Vercel):

🚀 Key Features

Users can browse services, view details, and book appointments.

Service providers can add, update, and delete their own services.

Firebase Authentication (Email/Password + Google login).

Fully responsive UI for mobile, tablet, and desktop.

Private routes for secure access (My Services, Add Service, My Bookings, Profile).

Real-time notifications using toast/SweetAlert2.

Dynamic home page with animations and top-rated services.

🧩 Core Technologies

Frontend: React, React Router, Tailwind / DaisyUI, Firebase Auth
Backend: Node.js, Express.js, MongoDB, JWT (optional token verify)
Hosting: Client → Netlify/Surge/Firebase | Server → Vercel
Animations: Framer Motion or similar

📱 Pages & Functionalities
🏠 Home Page

Hero slider (3+ slides) with call-to-action.

Dynamic section: Six services fetched from DB.

Two custom static sections (e.g., Testimonials, Why Choose Us).

Animated UI elements.

🔐 Authentication
Login

Email + Password fields

Google login option

Redirects after successful login

Error messages using toast

Registration

Name, Email, Photo URL, Password

Password rules: At least 6 chars, 1 uppercase, 1 lowercase

Google registration option

Profile Page

Shows user info: name, email, photo, last login time

Update profile (name/photo)

🧰 CRUD Features
For Service Providers
➕ Add Service

Fields: name, category, price, description, image URL, provider name, provider email

Saves to MongoDB (POST)

📋 My Services

Shows only logged-in provider’s services

Update and Delete options

✏️ Update Service

Providers can edit their listings (PATCH/PUT)

❌ Delete Service

Providers can delete their own services

For Customers
🗂️ Services List

All services shown in card format

Filter, search (optional), and price range options

Details button for each service

🔍 Service Details Page

Complete information

Book Now button

Shows reviews section

📅 Booking System

Modal form: userEmail (read-only), bookingDate, price

Saves to bookings collection

📘 My Bookings Page

Shows all bookings of logged-in customer

Cancel booking (DELETE)

🗄️ Database Structure
Collections

Services

Bookings

Relations

Bookings.userEmail ↔ Firebase user email

Bookings.serviceId ↔ Services._id

⚡ Additional Features (Challenge Requirements)
⭐ Price Filtering

Uses $gte and $lte for range-based filtering.

⭐ Rating & Reviews

Users can submit ratings for booked services

Stored inside service as an array

Shows all reviews on details page

Top 6 services shown on homepage

🌙 Theme Toggle

Light/Dark mode switch for full app.

🛡️ Booking Restriction

Users cannot book their own services.

🌱 Optional Enhancements

Search system using MongoDB $regex

Firebase token verification for secured API

Provider dashboard with charts: service count, revenue, rating
