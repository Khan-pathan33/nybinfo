// export default function Courses(){
//     return (
//         <section className="space-y-6">
//             <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400
//              to-gradient-500 bg-clip-text text-transparent">
//                 Courses
//             </h1>

//             <p className="text-neutral-300 max-w-xl">
//                 Explore beginner to advanced frontend courses. Upgrade to premium 
//                 to unlock advanced content.
//             </p>

//             <div className="grid md:grid-cols-2 gap-6">
//                 <div className="p-6 rounded-xl bg-white/5 shadow-soft">
//                     React Fundamentals
//                 </div>
//                 <div className="p-6 rounded-xl bg-white/5 shadow-soft">
//                     Advanced State Management
//                 </div>
//             </div>
//         </section>
//     )
// }



export function Courses() {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold">Courses</h1>
      <p className="mt-2">Upgrade to premium for advanced content</p>
    </div>
  );
}