// 'use client';

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Shield, Target, Calendar, Smartphone } from "lucide-react";

// const formSchema = z.object({
//   firstName: z.string().min(2, "First name must be at least 2 characters"),
//   lastName: z.string().min(2, "Last name must be at least 2 characters"),
//   businessType: z.string().min(1, "Please select a business type"),
//   businessEmail: z.string().email("Please enter a valid email address"),
//   location: z.string().min(1, "Please select a location"),
//   mobileNumber: z.string().min(10, "Please enter a valid mobile number"),
// });

// type FormData = z.infer<typeof formSchema>;

// export default function PinnaclePaySignup() {
//   const [isLoading, setIsLoading] = useState(false);

//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       businessType: "",
//       businessEmail: "",
//       location: "",
//       mobileNumber: "",
//     },
//   });

//   const onSubmit = async (data: FormData) => {
//     setIsLoading(true);
//     console.log("Form submitted:", data);
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     setIsLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex bg-background">
//       {/* Left Side - Hero Section */}
//       <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
//         {/* Background decorative elements */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
//         </div>
        
//         {/* Floating icons */}
//         <div className="absolute top-20 left-20 text-white/30">
//           <Shield size={40} />
//         </div>
//         <div className="absolute top-40 right-20 text-white/30">
//           <Target size={32} />
//         </div>
//         <div className="absolute bottom-40 left-16 text-white/30">
//           <Calendar size={36} />
//         </div>
//         <div className="absolute bottom-20 right-16 text-white/30">
//           <Smartphone size={28} />
//         </div>

//         {/* Main content */}
//         <div className="relative z-10 flex flex-col justify-center px-12 text-white">
//           <div className="mb-8">
//             <h1 className="text-4xl font-bold mb-6 leading-tight">
//               Easily Add a Beneficiary
//             </h1>
//             <p className="text-lg text-white/80 mb-4 leading-relaxed">
//               Save time and stay secure by adding trusted recipients in just a few
//               taps.
//             </p>
//             <p className="text-white/70">
//               Whether it's a vendor, client, or partner – we've got you covered.
//             </p>
//           </div>

//           {/* Woman with laptop illustration placeholder */}
//           <div className="flex justify-center mb-8">
//             <div className="w-80 h-80 bg-gradient-to-br from-teal-400 to-purple-600 rounded-full flex items-center justify-center">
//               <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
//                 <Smartphone size={80} className="text-white/60" />
//               </div>
//             </div>
//           </div>

//           {/* Progress indicators */}
//           <div className="flex justify-center space-x-2">
//             <div className="w-8 h-2 bg-white rounded-full"></div>
//             <div className="w-2 h-2 bg-white/50 rounded-full"></div>
//             <div className="w-2 h-2 bg-white/30 rounded-full"></div>
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
//         <div className="w-full max-w-md space-y-8">
//           {/* Header */}
//           <div className="text-center lg:text-left">
//             <div className="flex items-center justify-center lg:justify-start mb-4">
//               <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
//                 <span className="text-primary-foreground font-bold text-lg">P</span>
//               </div>
//               <span className="ml-2 text-lg font-semibold text-foreground">
//                 Welcome To Pinnacle Pay
//               </span>
//             </div>
//             <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
//               Get started with
//             </h2>
//             <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
//               Pinnacle Pay
//             </h3>
//             <p className="text-muted-foreground">
//               Please enter the following details to setup corporate account
//             </p>
//           </div>

//           {/* Form */}
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//               {/* Name Fields */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <FormField
//                   control={form.control}
//                   name="firstName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>First Name *</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Alex" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="lastName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Last Name *</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Doe" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               {/* Business Type */}
//               <FormField
//                 control={form.control}
//                 name="businessType"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Select Business Type *</FormLabel>
//                     <Select onValueChange={field.onChange} defaultValue={field.value}>
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Private Limited" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value="private-limited">Private Limited</SelectItem>
//                         <SelectItem value="public-limited">Public Limited</SelectItem>
//                         <SelectItem value="partnership">Partnership</SelectItem>
//                         <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
//                         <SelectItem value="llp">Limited Liability Partnership</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               {/* Business Email */}
//               <FormField
//                 control={form.control}
//                 name="businessEmail"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Business Email *</FormLabel>
//                     <FormControl>
//                       <Input placeholder="AlexDoe@gmail.com" type="email" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               {/* Location */}
//               <FormField
//                 control={form.control}
//                 name="location"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Select Location *</FormLabel>
//                     <Select onValueChange={field.onChange} defaultValue={field.value}>
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="United Kingdom" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value="united-kingdom">United Kingdom</SelectItem>
//                         <SelectItem value="united-states">United States</SelectItem>
//                         <SelectItem value="canada">Canada</SelectItem>
//                         <SelectItem value="australia">Australia</SelectItem>
//                         <SelectItem value="germany">Germany</SelectItem>
//                         <SelectItem value="france">France</SelectItem>
//                         <SelectItem value="india">India</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               {/* Mobile Number */}
//               <FormField
//                 control={form.control}
//                 name="mobileNumber"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Mobile number *</FormLabel>
//                     <FormControl>
//                       <div className="flex">
//                         <div className="flex items-center px-3 py-2 border border-r-0 border-input bg-muted rounded-l-md">
//                           <span className="text-sm text-muted-foreground">+44</span>
//                         </div>
//                         <Input 
//                           placeholder="9876540392" 
//                           className="rounded-l-none" 
//                           {...field} 
//                         />
//                       </div>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               {/* Submit Button */}
//               <Button 
//                 type="submit" 
//                 className="w-full h-12 text-lg font-medium"
//                 disabled={isLoading}
//               >
//                 {isLoading ? "Creating Account..." : "Create Account"}
//               </Button>

//               {/* Login Link */}
//               <div className="text-center">
//                 <p className="text-muted-foreground">
//                   Already have an Account?{" "}
//                   <button 
//                     type="button" 
//                     className="text-primary hover:underline font-medium"
//                     onClick={() => console.log("Navigate to login")}
//                   >
//                     Log in
//                   </button>
//                 </p>
//               </div>
//             </form>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// }


// src/app/(auth)/signup/page.tsx

import React from "react";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-2xl font-bold">Signup Page</h1>
    </div>
  );
}
