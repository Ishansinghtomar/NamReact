import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const err=useRouteError();
console.log(err)
return  (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "8px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ fontSize: "64px", margin: "0", color: "#ff4d4f" }}>
          {err.status}
        </h1>

        <p style={{ margin: "10px 0 20px", color: "#555" }}>
        </p>

        <button
          style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            background: "#222",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => (window.location.href = "/")}
        >
          Go Home
        </button>
      </div>
    </div>
)
}

export default Error