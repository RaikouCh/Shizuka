import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Plus, Book, Bot, Settings } from "lucide-react";
import "./Sidebar.css";
import logoImage from "./assets/logo.png";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
    </div>
  );
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      animate={{ width: isOpen ? 260 : 70 }}
      className="sidebar"
    >
      {/* Header */}
      <div className="sidebar-header">
        <button onClick={() => setIsOpen(!isOpen)} className="logo">
          <img src={logoImage} alt="Shizuka Logo" className="logo-icon" />
          {isOpen && <span className="logo-text">Shizuka</span>}
        </button>
      </div>

      {/* Search */}
      <div className="section">
        <button className="search-btn">
          <Search size={18} />
          {isOpen && <span>Search chats...</span>}
        </button>
      </div>

      {/* New Chat */}
      <div className="section">
        <button className="new-chat-btn">
          <Plus size={18} />
          {isOpen && <span>New Chat</span>}
        </button>
      </div>

      {/* Chat History */}
      <div className="chat-history-container">
        {isOpen && <h3 className="chat-history-title">Chats</h3>}
        <div className="chat-history">
        </div>
      </div>

      {/* Tools */}
      <div className="tools">
        {isOpen && <h3 className="tools-title">Tools</h3>}
        <div className="tool-item">
          <Book size={18} />
          {isOpen && <span>Library</span>}
        </div>
        <div className="tool-item">
          <Bot size={18} />
          {isOpen && <span>Other GPT</span>}
        </div>
        <div className="tool-item">
          <Settings size={18} />
          {isOpen && <span>Settings</span>}
        </div>
      </div>
    </motion.div>
  );
}
