

export default function HomeHero() {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "2rem"
      }}>
        <div style={{
          maxWidth: "600px"
        }}>
          <h2 style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
          }}>Navigate Your Career Path with AI</h2>
          <p style={{
            fontSize: "1.3rem",
            marginBottom: "2rem",
            opacity: 0.95
          }}>SailIN helps you discover opportunities and make informed career decisions</p>
          <button style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            color: "white",
            border: "none",
            padding: "1rem 2.5rem",
            fontSize: "1.1rem",
            borderRadius: "50px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "transform 0.3s, box-shadow 0.3s",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
          }} onClick={HomeFeatures}>Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2rem",
        padding: "4rem 2rem",
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      }}>
        {[
          { icon: "🎯", title: "AI Career Assessment", description: "Get personalized insights about your strengths", bgColor: "#00d4ff" },
          { icon: "📚", title: "Learning Paths", description: "Curated courses to develop your skills", bgColor: "#00f2fe" },
          { icon: "💼", title: "Job Matching", description: "Find roles that align with your goals", bgColor: "#43e97b" }
        ].map((feature, i) => (
          <div key={i} style={{
            background: `linear-gradient(135deg, ${feature.bgColor} 0%, #4facfe 100%)`,
            padding: "2.5rem",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer",
            color: "white",
            position: "relative"
          }} 
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-15px) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)";
          }}>
            <span style={{ fontSize: "3.5rem", display: "block", marginBottom: "1rem" }}>{feature.icon}</span>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "0.8rem", fontWeight: "bold" }}>{feature.title}</h3>
            <p style={{ lineHeight: "1.8", opacity: 0.95 }}>{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <section style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "4rem 2rem",
        color: "white",
        textAlign: "center"
      }}>
        <h3 style={{ fontSize: "2.5rem", marginBottom: "3rem", fontWeight: "bold" }}>Join Thousands of Career Builders</h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem"
        }}>
          {[
            { number: "10K+", label: "Active Users" },
            { number: "500+", label: "Career Paths" },
            { number: "95%", label: "Success Rate" }
          ].map((stat, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.1)",
              padding: "2rem",
              borderRadius: "12px",
              backdropFilter: "blur(10px)"
            }}>
              <div style={{ fontSize: "2.8rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#f093fb" }}>{stat.number}</div>
              <div style={{ fontSize: "1.1rem", opacity: 0.9 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        padding: "4rem 2rem",
        color: "white",
        textAlign: "center"
      }}>
        <h3 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", fontWeight: "bold" }}>Ready to Transform Your Career?</h3>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>Start your journey with SailIN today and unlock your potential</p>
        <button style={{
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          color: "white",
          border: "none",
          padding: "1.2rem 3rem",
          fontSize: "1.1rem",
          borderRadius: "50px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "transform 0.3s, box-shadow 0.3s",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
        }}>Get Started Now</button>
      </section>
    </div>
  )
}

export function HomeFeatures() {
  // This function is kept for backward compatibility but the features are now in HomeHero
  return null
}