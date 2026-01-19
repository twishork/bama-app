# bama-app
Alabama Philanthropic Prospector (APP)
Data-Driven Intelligence for Million-Dollar Initiatives

1. Project Overview
The Alabama Philanthropic Prospector is a strategic lead-generation tool designed for development officers and non-profit executives. In the landscape of million-dollar fundraising, efficiency is key. This application consumes real-time economic data to identify high-capacity regions within the state of Alabama, allowing teams to prioritize outreach where the philanthropic potential is highest.

The Problem

Fundraising initiatives often rely on anecdotal evidence or outdated lists to decide where to focus "Major Gift" efforts. This results in wasted travel budgets and missed opportunities in emerging high-growth corridors.

The Solution

By integrating the U.S. Census Bureau API, this tool provides a live dashboard of Alabama's 67 counties, ranked by Median Household Income and Total Population. It applies business logic to "flag" counties that meet a specific wealth threshold necessary for $1M+ capital campaigns.

2. Technical Features
Live Data Integration: Consumes the U.S. Census ACS 5-Year Survey API.

Dynamic Filtering: Users can filter counties by a "Minimum Income" threshold to narrow down high-capacity leads.

Capacity Indicators: Automatically badges counties with a Median Household Income over $75,000 as "Major Gift Priority."

Mobile Responsive: Built with Tailwind CSS to ensure development officers can use the tool in the field.

3. The Data Source
API: U.S. Census Bureau ACS 5-Year Estimates

Endpoint Used: /data/2022/acs/acs5

Variables: * B19013_001E: Median Household Income (The primary wealth indicator)

B01003_001E: Total Population (To determine the size of the "donor pool")

4. How to Run This Application
Prerequisites

Node.js (Version 16 or higher recommended)

A modern web browser

Installation

Clone the repository:

Bash
git clone https://github.com/yourusername/alabama-prospector.git
Navigate to the project directory:

Bash
cd alabama-prospector
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm start
View in browser: Open http://localhost:3000

5. Strategy for Million-Dollar Initiatives
This application serves as the "Top of the Funnel" for a 15-minute presentation.

Identify: Use the tool to find the top 5 wealthiest counties (e.g., Shelby, Madison).

Target: Filter for population centers with high income to find "dense" wealth.

Execute: Use these insights to allocate a $1,000,000 fundraising budget effectively across the state.
