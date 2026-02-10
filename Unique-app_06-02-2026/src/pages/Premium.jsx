// export default function Premium(){
//     return (
//         <section className="space-y-6">
//             <h1 className="text-4xl font-bold bg-gradient-to-r from-fuchsia-500
//              to-purple-600 bg-clip-text text-transparent ">
//                 Advanced Course
//              </h1>

//              <p className="text-neutral-300 max-w-xl">
//                 Welcome to premium content. This page is protected using
//                  Redux-based role validation.
//              </p>

//              <div className="p-6 rounded-xl bg-white/5 hadow-soft">
//              Advance React Patterns
//              Performance Optimization
//              Secure Architecture
//              </div>
//         </section>
//     )
// }

export function Premium() {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold">Advanced Course 🔐</h1>
      <p className="mt-2">Premium users only</p>
    </div>
  );
}