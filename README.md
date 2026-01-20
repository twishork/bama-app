# bama-app
Alabama Philanthropic Prospector (APP)
Data-Driven Intelligence for Million-Dollar Initiatives

Project Overview

The Alabama Philanthropic Prospector is a strategic lead-generation tool designed for development officers and non-profit executives. In the landscape of million-dollar fundraising, efficiency is key. This application consumes real-time economic data to identify high-capacity regions within the state of Alabama, allowing teams to prioritize outreach where the philanthropic potential is highest.

The Problem

Fundraising initiatives often rely on anecdotal evidence or outdated lists to decide where to focus "Major Gift" efforts. This results in wasted travel budgets and missed opportunities in emerging high-growth corridors.

The Solution

By integrating the U.S. Census Bureau API, this tool provides a live dashboard of Alabama's 67 counties, ranked by Median Household Income and Total Population. It applies business logic to "flag" counties that meet a specific wealth threshold necessary for $1M+ capital campaigns.


Technical Features
Live Data Integration: Consumes the U.S. Census ACS 5-Year Survey API.

Dynamic Filtering: Users can filter counties by a "Minimum Income" threshold to narrow down high-capacity leads.

Capacity Indicators: Automatically badges counties with a Median Household Income over $75,000 as "High Capacity."

Mobile Responsive: Built with Tailwind CSS to ensure development officers can use the tool in the field.


The Data Source
API: U.S. Census Bureau ACS 5-Year Estimates

Endpoint Used: /data/2022/acs/acs5

Variables: * B19013_001E: Median Household Income (The primary wealth indicator)

B01003_001E: Total Population (To determine the size of the "donor pool")


How to Run This Application
- Navigate to web browser to https://twishork.github.io/bama-app/
- Slide the slider to filter by median household income.
