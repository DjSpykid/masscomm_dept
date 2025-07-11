// // components/contact/ContactForm.tsx
// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Button } from "../ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
// import { toast } from "sonner";

// const formSchema = z.object({
//   name: z.string().min(2, {
//     message: "Name must be at least 2 characters.",
//   }),
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
//   subject: z.string().min(5, {
//     message: "Subject must be at least 5 characters.",
//   }),
//   message: z.string().min(10, {
//     message: "Message must be at least 10 characters.",
//   }),
// });

// export default function ContactForm() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     },
//   });

//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       toast.success("Message sent successfully!", {
//         description: "We will get back to you soon.",
//       });
//       form.reset();
//     } catch (error) {
//       toast.error("Failed to send message", {
//         description: "Please try again later.",
//       });
//     }
//   }

//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden">
//       <div className="p-6 sm:p-8">
//         <h3 className="text-xl font-bold text-gray-900 mb-6">
//           Send us a message
//         </h3>

//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Full Name</FormLabel>
//                     <FormControl>
//                       <Input placeholder="John Doe" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input placeholder="john@example.com" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             <FormField
//               control={form.control}
//               name="subject"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Subject</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Regarding admission..." {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="message"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Message</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Type your message here..."
//                       className="min-h-[120px]"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <Button
//               type="submit"
//               className="w-full"
//               disabled={form.formState.isSubmitting}
//             >
//               {form.formState.isSubmitting ? "Sending..." : "Send Message"}
//             </Button>
//           </form>
//         </Form>
//       </div>

//       <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
//         <div className="flex flex-col sm:flex-row justify-between items-center">
//           <div className="mb-2 sm:mb-0">
//             <h4 className="font-medium text-gray-900">Contact Information</h4>
//             <p className="text-sm text-gray-600">
//               Department of Mass Communication
//             </p>
//           </div>
//           <div className="flex space-x-4">
//             <a
//               href="tel:+2341234567890"
//               className="text-sm text-blue-700 hover:text-blue-800"
//             >
//               +234 123 456 7890
//             </a>
//             <a
//               href="mailto:info@masscomm.edu.ng"
//               className="text-sm text-blue-700 hover:text-blue-800"
//             >
//               info@masscomm.edu.ng
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
