import "./PortfolioDashboard.css";
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PortfolioCard from "./PFcard";

const PortfolioDashboard = () => {
  const [portfolios, setPortfolios] = useState([
    { id: 1, title: "Portfolio 1", description: "Description for Portfolio 1" },
    { id: 2, title: "Portfolio 2", description: "Description for Portfolio 2" },
  ]);

  const [newPortfolio, setNewPortfolio] = useState({
    title: "",
    description: "",
  });

  const [isCreatePortfolioModalOpen, setCreatePortfolioModalOpen] =
    useState(false);

  const openCreatePortfolioModal = () => {
    setCreatePortfolioModalOpen(true);
  };

  const closeCreatePortfolioModal = () => {
    setCreatePortfolioModalOpen(false);
  };

  const handleNewPortfolioChange = (e) => {
    const { name, value } = e.target;
    setNewPortfolio({ ...newPortfolio, [name]: value });
  };

  const handleCreatePortfolio = () => {
    if (newPortfolio.title && newPortfolio.description) {
      setPortfolios([...portfolios, { id: Date.now(), ...newPortfolio }]);
      setNewPortfolio({ title: "", description: "" });
    }
  };

  const handleDeletePortfolio = (id) => {
    const updatedPortfolios = portfolios.filter(
      (portfolio) => portfolio.id !== id
    );
    setPortfolios(updatedPortfolios);
  };

  const handleEditPortfolio = (id, newTitle, newDescription) => {
    const updatedPortfolios = portfolios.map((portfolio) => {
      if (portfolio.id === id) {
        return { ...portfolio, title: newTitle, description: newDescription };
      }
      return portfolio;
    });
    setPortfolios(updatedPortfolios);
  };

  return (
    <div className="portfolio-dashboard">
      <div className="portfolio-list">
        {portfolios.map((portfolio) => (
          <PortfolioCard
            key={portfolio.id}
            portfolio={portfolio}
            onDelete={() => handleDeletePortfolio(portfolio.id)}
            onEdit={handleEditPortfolio}
          />
        ))}

        <div className="new-portfolio-button">
          <button className="new-btn" onClick={openCreatePortfolioModal}>
            <h1 className="plus">+</h1>
            <h2>Create Portfolio</h2>
          </button>

          {isCreatePortfolioModalOpen && (
            <div className="overlay">
              <div className="new-portfolio-modal">
                <h2>Create New Portfolio</h2>
                <input
                  type="text"
                  name="title"
                  placeholder="Portfolio Title"
                  value={newPortfolio.title}
                  onChange={handleNewPortfolioChange}
                />
                <textarea
                  name="description"
                  placeholder="Portfolio Description"
                  value={newPortfolio.description}
                  onChange={handleNewPortfolioChange}
                />
                <button onClick={handleCreatePortfolio}>
                  Create Portfolio
                </button>
                <button onClick={closeCreatePortfolioModal}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDashboard;
