
// import React, { useState } from "react";

// function App() {
//   const burgers = [
//    {
//       name: "Cheese Burger",
//        price: 120,
//        image: "https://images.pexels.com/photos/3915915/pexels-photo-3915915.jpeg",
//      },
//      {
//        name: "Chicken Burger",
//        price: 150,
//        image: "https://images.pexels.com/photos/17121731/pexels-photo-17121731.jpeg",
//      },
//     {
//       name: "Veggie Burger",
//       price: 100,
//       image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=500&q=60",
//     },
//     {
//       name: "Double Patty Burger",
//       price: 200,
//       image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=60",
//     },
//   ];

//   const [cart, setCart] = useState([]);
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const addToCart = (burger) => setCart([...cart, burger]);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thank you ${form.name}, we will contact you soon!`);
//     setForm({ name: "", email: "", message: "" });
//   };

//   const styles = {
//     body: { fontFamily: "Arial", backgroundColor: "#fff2e6", margin: 0 },
//     header: {
//       backgroundColor: "#ff7b00",
//       color: "white",
//       padding: "15px 30px",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//     },
//     logo: { fontSize: 26, fontWeight: "bold", display: "flex", alignItems: "center", gap: 10 },
//     nav: { display: "flex", gap: 25 },
//     navLink: { color: "white", fontWeight: "bold", fontSize: 18, textDecoration: "none" },
//     hero: {
//       padding: "80px 20px", // increased padding for bigger hero
//       background:
//         "url('https://images.unsplash.com/photo-1550547660-d9450f859349') center/cover no-repeat",
//       backgroundSize: "cover",
//       color: "white",
//       textShadow: "2px 2px #000",
//       textAlign: "center",
//     },
//     section: { padding: "50px 20px", textAlign: "center" },
//     menuTitle: { fontSize: 32, fontWeight: "bold", marginBottom: 30 }, // Our Menu bigger
//     burgerList: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 20 },
//     burgerCard: {
//       background: "#fff",
//       padding: 20,
//       width: 220,
//       borderRadius: 15,
//       boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
//       textAlign: "center",
//     },
//     burgerImage: { width: "100%", height: 150, borderRadius: 10, objectFit: "cover" },
//     button: {
//       marginTop: 10,
//       padding: "10px 15px",
//       backgroundColor: "#ff7b00",
//       color: "white",
//       border: "none",
//       borderRadius: 5,
//       cursor: "pointer",
//     },
//     input: { marginBottom: 15, padding: 10, borderRadius: 8, border: "1px solid #ccc", width: "100%" },
//     footer: { backgroundColor: "#ff7b00", color: "white", textAlign: "center", padding: 15 },
//   };

//   return (
//     <div style={styles.body}>
//       {/* Header */}
//       <header style={styles.header}>
//         <div style={styles.logo}>
//           <span role="img" aria-label="burger">🍔</span> Burger Heaven
//         </div>
//         <nav style={styles.nav}>
//           <a href="#menu" style={styles.navLink}>Menu</a>
//           <a href="#about" style={styles.navLink}>About</a>
//           <a href="#contact" style={styles.navLink}>Contact</a>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section style={styles.hero} className="text-black">
//         <h2>Welcome to Burger Heaven!</h2>
//         <p>The tastiest burgers in town 🍔🔥</p>
//       </section>

//       {/* Menu Section */}
//       <section id="menu" style={styles.section}>
//         <h2 style={styles.menuTitle}>🍔 Our Menu</h2>
//         <div style={styles.burgerList}>
//           {burgers.map((burger, index) => (
//             <div style={styles.burgerCard} key={index}>
//               <img src={burger.image} alt={burger.name} style={styles.burgerImage} />
//               <h3>{burger.name}</h3>
//               <p>Price: ₹{burger.price}</p>
//               <button style={styles.button} onClick={() => addToCart(burger.name)}>Add to Cart</button>
//             </div>
//           ))}
//         </div>
//         {cart.length > 0 && (
//           <div style={{ marginTop: 20 }}>
//             <h3>🛒 Cart</h3>
//             <ul>
//               {cart.map((item, index) => (<li key={index}>{item}</li>))}
//             </ul>
//           </div>
//         )}
//       </section>

//       {/* About Section */}
//       <section id="about" style={styles.section}>
//         <h2>About Us</h2>
//         <p>
//           At Burger Heaven, we serve the juiciest, most delicious burgers made
//           with fresh ingredients. Every burger is crafted with love 🍔❤️
//         </p>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" style={styles.section}>
//         <h2>Contact Us</h2>
//         <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto", display: "flex", flexDirection: "column" }}>
//           <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} style={styles.input} required />
//           <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} style={styles.input} required />
//           <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} style={styles.input} required />
//           <button type="submit" style={styles.button}>Send Message</button>
//         </form>
//       </section>

//       {/* Footer */}
//       <footer style={styles.footer}>
//         <p>© 2026 Burger Heaven. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;

//color palette

import React, { useState } from "react";

function App() {
  const initialColors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD", "#E67E22"];
  const [colors, setColors] = useState(initialColors);
  const [selectedColor, setSelectedColor] = useState(null); // clicked main color
  const [highlightedShade, setHighlightedShade] = useState(null); // clicked shade
  const [newColor, setNewColor] = useState("");

  // Convert hex to RGB
  const hexToRgb = (hex) => {
    let c = hex.substring(1);
    return {
      r: parseInt(c.substring(0, 2), 16),
      g: parseInt(c.substring(2, 4), 16),
      b: parseInt(c.substring(4, 6), 16),
    };
  };

  // Convert RGB to hex
  const rgbToHex = (r, g, b) =>
    `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  // Generate shades around the color
  const generateShades = (hex, count = 12) => {
    const shades = [];
    for (let i = -50; i <= 50; i += Math.floor(100 / (count - 1))) {
      let c = hexToRgb(hex);
      let r = clamp(c.r + i, 0, 255);
      let g = clamp(c.g + i, 0, 255);
      let b = clamp(c.b + i, 0, 255);
      shades.push(rgbToHex(r, g, b));
    }
    return shades;
  };

  // Copy color and highlight
  const selectShade = (shade) => {
    navigator.clipboard.writeText(shade);
    setHighlightedShade(shade);
    alert(`${shade} copied to clipboard!`);
  };

  const addColor = () => {
    if (/^#[0-9A-F]{6}$/i.test(newColor)) {
      setColors([...colors, newColor]);
      setNewColor("");
    } else {
      alert("Enter a valid hex code (e.g., #123ABC)");
    }
  };

  const styles = {
    body: { fontFamily: "Arial", backgroundColor: "#f7f7f7", padding: 20 },
    header: { textAlign: "center", marginBottom: 30 },
    palette: { display: "flex", flexWrap: "wrap", gap: 15, justifyContent: "center" },
    colorBox: {
      width: 120,
      height: 120,
      borderRadius: 10,
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
      textShadow: "1px 1px #000",
      position: "relative",
    },
    spinnerContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 250,
      height: 250,
      borderRadius: "50%",
    },
    shadeBox: {
      width: 50,
      height: 50,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: 10,
      fontWeight: "bold",
      cursor: "pointer",
      textShadow: "1px 1px #000",
      position: "absolute",
    },
    inputContainer: { textAlign: "center", marginTop: 20 },
    input: { padding: 10, borderRadius: 5, border: "1px solid #ccc", width: 150, marginRight: 10 },
    button: { padding: "10px 15px", borderRadius: 5, border: "none", backgroundColor: "#33B5FF", color: "white", cursor: "pointer", marginRight: 10 },
    highlighted: { marginTop: 30, textAlign: "center" },
    highlightedBox: { width: 120, height: 120, margin: "auto", borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", color: "white", fontSize: 16, textShadow: "1px 1px #000" },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1>🎨 React Color Spinner</h1>
        <p>Click a color to see its shade wheel! Click a shade to copy & highlight.</p>
      </header>

      <div style={styles.palette}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{ ...styles.colorBox, backgroundColor: color }}
            onClick={() => setSelectedColor(selectedColor === color ? null : color)}
          >
            {color}

            {selectedColor === color && (
              <div style={styles.spinnerContainer}>
                {generateShades(color).map((shade, i, arr) => {
                  const angle = (i / arr.length) * 360;
                  const radius = 100;
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);
                  return (
                    <div
                      key={i}
                      style={{ ...styles.shadeBox, backgroundColor: shade, left: 100 + x, top: 100 + y }}
                      onClick={(e) => { e.stopPropagation(); selectShade(shade); }}
                    >
                      {shade}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Highlighted selected shade */}
      {highlightedShade && (
        <div style={styles.highlighted}>
          <h2>Selected Shade:</h2>
          <div style={{ ...styles.highlightedBox, backgroundColor: highlightedShade }}>
            {highlightedShade}
          </div>
        </div>
      )}

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="#FFFFFF"
          value={newColor}
          onChange={(e) => setNewColor(e.target.value)}
          style={styles.input}
        />
        <button onClick={addColor} style={styles.button}>Add Color</button>
      </div>
    </div>
  );
}

export default App;
