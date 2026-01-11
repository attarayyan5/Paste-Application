import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaCalendarAlt } from "react-icons/fa";

function ViewPaste() {
  const { id } = useParams();
  const pastes = useSelector((state) => state.paste.pastes);

  const paste = pastes.find((paste) => paste._id === id);

  if (!paste) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontSize: "18px"
        }}
      >
        <h2>Paste not found</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "30px"
      }}
    >
      <div
        style={{
          width: "60%",
          border: "1px solid white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          borderRadius: "8px"
        }}
      >
        {/* Title */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          {paste.title}
        </div>

        {/* Content */}
        <div
          style={{
            whiteSpace: "pre-wrap",
            backgroundColor: "#111",
            padding: "15px",
            borderRadius: "6px",
            fontSize: "14px",
            lineHeight: "1.6"
          }}
        >
          {paste.content}
        </div>

        {/* Date */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "6px",
            fontSize: "12px",
            opacity: 0.8
          }}
        >
          <FaCalendarAlt />
          <span>{paste.createdAt}</span>
        </div>
      </div>
    </div>
  );
}

export default ViewPaste;
