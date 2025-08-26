
import { ProjectCategory } from '../types';
import type { Project } from '../types';

/*
 * =====================================================================================
 * This file acts as your portfolio's database, populated with your projects
 * from the provided GitHub repository.
 * =====================================================================================
 */

export const projects: Project[] = [
    {
        id: 1,
        title: "Statistical Deep Dive into World Happiness",
        category: ProjectCategory.Analytics,
        description: "A comprehensive statistical analysis of the World Happiness Index, building predictive models and testing hypotheses about global well-being pre- and post-COVID.",
        tags: ['R', 'Statistics', 'Data Visualization', 'ggplot2', 'T-test', 'Regression'],
        details: {
            problem: "The World Happiness Report provides a wealth of data, but the underlying drivers and temporal shifts (especially around the COVID-19 pandemic) are not immediately obvious. The project aimed to uncover statistically significant relationships and changes in global happiness.",
            solution: "Utilized R and the Tidyverse ecosystem to analyze 8 years of happiness data. Performed correlation analysis, built a multiple linear regression model to identify key happiness predictors, and conducted paired t-tests to assess the pandemic's impact on happiness scores.",
            techStack: ['R', 'RStudio', 'Tidyverse', 'ggplot2', 'corrplot', 'dplyr'],
            businessImpact: "This analysis is crucial for policy-makers and NGOs. It helps identify key areas for investment to improve citizen well-being (e.g., social support, public health) and provides a quantitative basis for understanding the societal impact of global events.",
            codeSnippet: {
                language: 'r',
                code: `
# Objective: Test if happiness scores changed post-COVID.
# Subset avgScore data before COVID
before <- subset(HIScov,  Phase == "preCOVID", avgScore,
                 drop = TRUE)
# Subset avgScore data after COVID
after <- subset(HIScov,  Phase == "postCOVID", avgScore,
                 drop = TRUE)

# Performing paired T-test
# H0: There is no significant difference in mean happiness.
# Ha: Pre-COVID happiness was less than post-COVID.
happiness_ttest <- t.test(before, after, paired = TRUE, alternative = "less")

# Result: The p-value was not significant, suggesting no major drop in 
# happiness scores globally immediately following the pandemic's onset.
`
            },
            repoUrl: "https://github.com/sinahonesty/Coding-Portfolio/tree/main/World_Happiness_Index"
        }
    },
    {
        id: 2,
        title: "Systems Dynamics Model of School Segregation",
        category: ProjectCategory.Design,
        description: "A causal loop diagram developed using Systems Dynamics principles to model the complex, interconnected factors contributing to school racism and segregation in San Francisco.",
        tags: ['Systems Thinking', 'Causal Loop Diagram', 'Vensim', 'Social Science', 'Modeling'],
        details: {
            problem: "Social issues like school segregation are multifaceted, with numerous feedback loops that make simple solutions ineffective. The challenge was to create a holistic model that visualizes these interconnected drivers to foster a deeper understanding of the problem.",
            solution: "Developed a detailed causal loop diagram using Systems Dynamics methodology. The model maps relationships between variables like 'neighborhood segregation', 'public education policies', 'economic disparity', and 'school funding'. This visual model helps identify key leverage points for policy interventions.",
            techStack: ['Vensim', 'Systems Dynamics Modeling', 'Qualitative Analysis'],
            businessImpact: "This modeling approach is invaluable for public policy, urban planning, and non-profit strategy. It allows stakeholders to simulate the long-term effects of different policies before implementation, reducing risk and improving outcomes. It's a powerful tool for strategic planning in any complex system.",
            codeSnippet: {
                language: 'text',
                code: `
# Causal Loop Snippet (Vensim Model Logic)

# A positive feedback loop where neighborhood segregation reinforces school segregation.
school segragation = A FUNCTION OF( neighborhood segragation )

# Neighborhood segregation is influenced by multiple factors.
neighborhood segragation = A FUNCTION OF( public education integration, public education racist policies )
    
# Illustrates how policies, even well-intentioned ones, create feedback.
public education racist policies = A FUNCTION OF( SFUSD goals of equity and diversity, SFUSD not using race in school assignment )
`
            },
            repoUrl: "https://github.com/sinahonesty/Coding-Portfolio/tree/main/school_racism_SD_model"
        }
    },
    {
        id: 3,
        title: "Data Mining for Fuel Consumption Insights",
        category: ProjectCategory.Analytics,
        description: "An analysis of vehicle data to understand and model the factors influencing fuel consumption, using data mining techniques within Microsoft Excel.",
        tags: ['Data Mining', 'Microsoft Excel', 'Sensitivity Analysis', 'Predictive Modeling'],
        details: {
            problem: "Predicting vehicle fuel efficiency is essential for consumers, manufacturers, and regulators. This project aimed to identify the key variables that impact fuel consumption from a large dataset of cars.",
            solution: "The analysis was conducted in Microsoft Excel, leveraging its data analysis tools. A sensitivity report was generated for a training set of 1500 cars to identify the most influential variables on the model's output, allowing for clear interpretation of the relationships between vehicle specs and fuel efficiency.",
            techStack: ['Microsoft Excel', 'Data Analysis ToolPak', 'Solver'],
            businessImpact: "Automotive manufacturers can use these findings to optimize vehicle design for better fuel economy. Logistics companies can apply similar models to their fleets to reduce fuel costs. For consumers, it provides a data-backed framework for choosing more efficient vehicles.",
            codeSnippet: {
                language: 'text',
                code: `
# Excel Solver Sensitivity Report - Key Variables
# This report identifies the final values for model coefficients
# determined by the optimization process.

# Variable Cells (Model Coefficients)
# ----------------------------------
# Cell   | Final Value
# ----------------------------------
# $E$1   | 17.6701411
# $E$2   | 16.42829797
# $G$1   | 40.03582167
# $G$2   | 12.04659529
# ... and so on

# A reduced gradient of 0 for all variables indicates that the
# optimal solution has been found within the given constraints.
`
            },
            repoUrl: "https://github.com/sinahonesty/Coding-Portfolio/tree/main/Fuel_Consumption_Data_Mining"
        }
    },
    {
        id: 4,
        title: "Simple CLI To-Do List",
        category: ProjectCategory.Fun,
        description: "A lightweight, command-line interface (CLI) to-do list application built with Python for simple and efficient task tracking.",
        tags: ['Python', 'CLI', 'Scripting', 'Automation'],
        details: {
            problem: "Managing simple daily tasks often doesn't require complex software. The goal was to create a fast, simple, and keyboard-driven task manager that runs directly in the terminal.",
            solution: "A single Python script that uses a `while` loop to present a menu of options (Add, Mark as Done, View, Exit). Tasks are stored in a simple list in memory for the duration of the session. The script demonstrates handling user input, conditional logic, and basic data structures.",
            techStack: ['Python'],
            businessImpact: "While a simple tool, the principles apply to building more complex CLI tools for automation, data processing, and system administration. It's a foundational example of creating efficient, script-based utilities that can streamline developer and operational workflows.",
            codeSnippet: {
                language: 'python',
                code: `
data = []

def show_menu():
    print('Menu:')
    print('1. Add an item')
    print('2. Mark as done')
    print('3. View to do items')
    print('4. Exit')

user_input = ''
while user_input != '4':
    show_menu()
    user_input = input('Enter your choice: >>> ')
    if user_input == '1':
        item = input('What is to be done? >>> ')
        data.append(item)
        print('Added item:', item)
    elif user_input == '2':
        item = input('What is to be marked as done? >>> ')
        if item in data:
            data.remove(item)
            print('Removed item: ', item)
`
            },
            repoUrl: "https://github.com/sinahonesty/Coding-Portfolio/tree/main/Warm-up"
        }
    },
    {
        id: 5,
        title: "SQL Customer Behavior & Revenue Analysis",
        category: ProjectCategory.Analytics,
        description: "A comprehensive SQL-based analysis of customer purchasing behavior, identifying top customers, peak sales periods, and the most profitable products from transactional data.",
        tags: ['SQL', 'PostgreSQL', 'Data Analysis', 'Business Intelligence', 'CTE'],
        details: {
            problem: "Businesses often have vast amounts of transactional data but struggle to extract meaningful insights. The goal was to use SQL to answer key business questions related to customer behavior and sales performance without relying on complex BI tools.",
            solution: "Wrote a series of structured SQL queries using PostgreSQL. The analysis involved Common Table Expressions (CTEs) for readability, window functions for ranking, and aggregate functions to summarize data. The queries identified top 10 customers by revenue, best-selling products, and monthly sales trends.",
            techStack: ['PostgreSQL', 'pgAdmin', 'SQL'],
            businessImpact: "The insights derived can directly inform marketing strategies (e.g., loyalty programs for top customers), inventory management (stocking high-performing products), and sales forecasting. It provides a low-cost, high-impact method for data-driven decision-making.",
            codeSnippet: {
                language: 'sql',
                code: `
-- Objective: Find the top 10 customers by total revenue.
WITH customer_total AS (
    SELECT
        customer_id,
        SUM(quantity * unit_price) as total_spent
    FROM retail_sales
    GROUP BY customer_id
)
SELECT
    c.customer_id,
    c.total_spent
FROM customer_total c
ORDER BY c.total_spent DESC
LIMIT 10;
`
            },
            repoUrl: "https://github.com/sinahonesty/Coding-Portfolio/tree/main/Customer_Behavior_Analysis"
        }
    },
    {
        id: 6,
        title: "Interactive Sales Performance Dashboard",
        category: ProjectCategory.Analytics,
        description: "An interactive Tableau dashboard for executive-level review of sales performance, visualizing key metrics like regional sales, product performance, and profit trends.",
        tags: ['Tableau', 'Data Visualization', 'Business Intelligence', 'Dashboard', 'KPI'],
        details: {
            problem: "Raw sales data in spreadsheets is difficult to interpret and doesn't reveal trends or patterns easily. Executives need a high-level, interactive view to monitor performance and make strategic decisions quickly.",
            solution: "Connected to a sales dataset and used Tableau to build a multi-faceted dashboard. The dashboard includes interactive filters for date range and region, map visualizations for geographic performance, and bar charts for category comparison. Key Performance Indicators (KPIs) like total sales and profit are prominently displayed.",
            techStack: ['Tableau Desktop', 'Data Visualization Principles'],
            businessImpact: "This dashboard transforms complex data into an accessible tool for decision-makers. It reduces the time needed for analysis, helps identify underperforming regions or products, and facilitates strategic planning sessions. It empowers a non-technical audience with powerful data insights.",
            codeSnippet: {
                language: 'text',
                code: `
# Tableau Dashboard Logic (Conceptual)

# 1. Data Source Connection
#    - Connect to 'Global Superstore' dataset.

# 2. Calculated Fields
#    - Profit Ratio: SUM([Profit]) / SUM([Sales])

# 3. Worksheets Created
#    - Sales Map: Geographic role for Country/State.
#    - Sales by Category: Bar chart with SUM(Sales) on columns.
#    - Sales Trend: Line chart with MONTH(Order Date) and SUM(Sales).

# 4. Dashboard Assembly
#    - Combine worksheets.
#    - Add interactive filters for 'Region' and 'Order Date'.
#    - Display KPIs for 'Total Sales', 'Total Profit'.
`
            }
        }
    },
    {
        id: 7,
        title: "Comprehensive Website UI/UX Redesign",
        category: ProjectCategory.Design,
        description: "A complete UI/UX overhaul for the BRBytes educational platform, focusing on improving user navigation and modernizing the interface for diverse audiences like students, teachers, and administrators.",
        tags: ['Figma', 'UI/UX Design', 'Prototyping', 'Sitemap', 'Anima'],
        details: {
            problem: "The existing BRBytes website was functional but lacked a clear user flow and modern design aesthetic, making it difficult for different user groups to find relevant information efficiently.",
            solution: "Conducted a full redesign process starting with creating a sitemap of the existing site to identify pain points. A new, more intuitive sitemap was proposed and approved. High-fidelity mockups and a clickable prototype were then built in Figma, focusing on a clean, accessible, and component-based design system.",
            techStack: ['Figma', 'Anima', 'Octopus.do (Sitemapping)', 'Miro'],
            businessImpact: "The new design provides a clear, user-centric structure that reduces friction for all stakeholders. It improves the program's brand perception and makes it easier to onboard new schools, teachers, and students, ultimately supporting the organization's growth.",
            liveUrl: "https://www.figma.com/proto/feM8rUeXwRCA76AmVUdg9b/BRBYTES-website?node-id=3%3A75&starting-point-node-id=3%3A75"
        }
    },
    {
        id: 8,
        title: "Interactive Admin Dashboard",
        category: ProjectCategory.Design,
        description: "Designed and coded a new, responsive admin dashboard using Bootstrap Studio to improve data visualization and management for the BRBytes team.",
        tags: ['Bootstrap Studio', 'HTML', 'CSS', 'Dashboard', 'UI Design'],
        details: {
            problem: "The internal admin dashboard for managing program data was outdated and not user-friendly. Staff needed a modern, intuitive interface to perform daily tasks like tracking student progress and managing course data.",
            solution: "Using Bootstrap Studio, a rapid prototyping and web design tool, I created a fully responsive dashboard. The process involved wireframing the layout, selecting appropriate Bootstrap components for data tables, forms, and navigation, and customizing the CSS to align with the BRBytes brand. The result is a clean, developer-ready front-end.",
            techStack: ['Bootstrap Studio', 'HTML5', 'CSS3', 'Bootstrap'],
            businessImpact: "The redesigned dashboard streamlines administrative workflows, reducing the time required for data management tasks. Its intuitive design lowers the learning curve for new staff and provides a scalable foundation for adding future administrative features.",
            liveUrl: "https://brbytes-dashboard.bss.design/"
        }
    },
    {
        id: 9,
        title: "Academic Journal Web Scraper",
        category: ProjectCategory.Automation,
        description: "Developed a Python-based web scraper to automate the collection of academic journal data. The project is currently blocked by bot detection but showcases scripting and automation capabilities.",
        tags: ['Python', 'Web Scraping', 'Scrapy', 'Automation'],
        details: {
            problem: "Manually collecting data from academic portals like Google Scholar for literature reviews or meta-analyses is a time-consuming and error-prone process. The goal was to automate this data extraction.",
            solution: "A web scraper was developed using the Scrapy framework in Python. The script was designed to navigate search result pages, extract publication titles, authors, and citation counts, and store the data in a structured format. While functional, it was ultimately blocked by advanced bot detection measures on the target site.",
            techStack: ['Python', 'Scrapy'],
            businessImpact: "This project serves as a proof-of-concept for data automation. Successfully deployed, such a tool could save researchers hundreds of hours. It also demonstrates an understanding of web structures and the challenges of modern web scraping, which is valuable for any data-centric automation role.",
            repoUrl: "https://github.com/SinaStB/ScrapyGS"
        }
    },
    {
        id: 10,
        title: "Credit Risk Classification",
        category: ProjectCategory.Analytics,
        description: "A predictive model to assess home equity loan default risk, comparing Decision Tree, Bootstrap Forest, and Boosted Tree models.",
        tags: ['JMP', 'Predictive Modeling', 'Classification', 'Risk Analysis', 'Machine Learning'],
        details: {
            problem: "Lenders need to accurately assess the probability of default for home equity loan applications to minimize financial risk and make informed decisions.",
            solution: "Developed and compared three machine learning models (Decision Tree, Bootstrap Forest, Boosted Tree) using JMP. The models were evaluated using ROC and Lift curves to identify the most reliable classification model, with the Random Forest model ultimately performing the best.",
            techStack: ['JMP', 'Predictive Analytics', 'CRISP-DM'],
            businessImpact: "This model enhances the efficiency and accuracy of the loan approval process. It provides a data-driven framework to reduce default risk, which is critical for financial institutions.",
        }
    },
    {
        id: 11,
        title: "Louisiana Crash Data Dashboard",
        category: ProjectCategory.Analytics,
        description: "An interactive Tableau dashboard visualizing Louisiana's crash data to identify trends related to age, time of day, and historical patterns for public safety analysis.",
        tags: ['Tableau', 'Data Visualization', 'Dashboard', 'Public Safety', 'Excel'],
        details: {
            problem: "Raw crash data spread across multiple worksheets is difficult for policymakers to interpret, hiding key trends and insights needed for effective public safety initiatives.",
            solution: "A comprehensive dashboard was built in Tableau using three datasets (Crashes, People in Crashes, Population). The dashboard visualizes crash trends by time, age group, and historical data, revealing that young adults (25-34) are most frequently involved in accidents, which peak in the afternoon and evening.",
            techStack: ['Tableau', 'Microsoft Excel', 'Data Visualization'],
            businessImpact: "Provides clear, actionable insights for public safety authorities to develop targeted interventions, such as awareness campaigns for specific age groups or increased patrols during peak hours, to improve road safety.",
        }
    },
    {
        id: 12,
        title: "Fake Job Postings Classifier",
        category: ProjectCategory.Automation,
        description: "A machine learning model built in Python to automatically classify job postings as fraudulent or legitimate, protecting job seekers from scams.",
        tags: ['Python', 'Machine Learning', 'Classification', 'XGBoost', 'Random Forest'],
        details: {
            problem: "Fraudulent job postings are a significant problem, leading to scams and wasting job seekers' time. Manually vetting every posting is impractical at scale.",
            solution: "Developed and compared several classification models (Decision Tree, Random Forest, XGBoost) in a Jupyter Notebook. The models were trained on a dataset of real and fake job postings, with the Random Forest model tuned for optimal performance, achieving high accuracy in identifying fraudulent listings.",
            techStack: ['Python', 'Jupyter Notebook', 'Scikit-learn', 'XGBoost', 'Pandas'],
            businessImpact: "This model can be integrated into job board platforms to automatically flag suspicious listings, protecting users and improving the platform's integrity. It automates a critical trust and safety function.",
            repoUrl: "https://github.com/SinaStB/Coding-Portfolio/blob/main/Fake%20Job%20Postings/fake_job_posting_first_model.ipynb",
            codeSnippet: {
                language: 'python',
                code: `
# Create Random Forest object with tuned hyperparameters
tuned_rf = RandomForestClassifier(n_estimators=100, max_depth=8, bootstrap=True)

# Train the model using the training sets
tuned_rf.fit(X_train, y_train)

# Make predictions using the testing set
y_pred_tuned = tuned_rf.predict(X_test)

# Evaluate the model's performance
accuracy = accuracy_score(y_test, y_pred_tuned)
print(f'Tuned Model Accuracy: {accuracy:.2f}')
`
            }
        }
    },
    {
        id: 13,
        title: "Energy Use Forecasting Model",
        category: ProjectCategory.Analytics,
        description: "A forecasting model developed in Excel to predict hourly energy loads for a utility company across fifteen regions using temperature and calendar data.",
        tags: ['Forecasting', 'Excel Solver', 'Optimization', 'Energy Sector'],
        details: {
            problem: "Utility companies need accurate energy demand forecasts to manage resources efficiently, prevent outages, and optimize pricing, which is a complex task involving multiple variables.",
            solution: "Utilized Microsoft Excel and the Solver add-in to build a time-series forecasting model. The model incorporates variables like temperature and calendar information (e.g., holidays, weekends) to predict hourly energy loads, helping the utility company anticipate demand spikes and dips.",
            techStack: ['Microsoft Excel', 'MS Solver', 'Forecasting Models'],
            businessImpact: "Accurate load forecasting enables utility companies to optimize power generation, reduce operational costs, and ensure a stable energy supply. This model provides a practical tool for critical resource management in the energy sector."
        }
    },
    {
        id: 14,
        title: "Sedaghat Art Center Website & Branding",
        category: ProjectCategory.Design,
        description: "Led the full branding and web presence for a new family-owned art center, from logo design to a fully functional e-commerce website.",
        tags: ["Branding", "Logo Design", "Web Design", "Wix", "Inkscape", "E-commerce"],
        details: {
            problem: "A new art gallery required a complete brand identity and an online platform to showcase artwork, announce classes, and establish a digital presence in the competitive Los Angeles art scene.",
            solution: "Designed the complete brand identity, including the logo and visual guidelines, using Inkscape. Developed and launched the official website using Wix, incorporating a gallery, class schedules, and e-commerce capabilities. Also managed the initial SEO strategy to drive local traffic.",
            techStack: ["Wix Platform", "Inkscape", "SEO"],
            businessImpact: "Successfully established a professional online brand for a new business, enabling it to reach customers beyond its physical location and creating a new sales channel through the e-commerce setup.",
            liveUrl: "https://www.sedaghatart.com"
        }
    },
    {
        id: 15,
        title: "'Impact' Mobile App Prototype",
        category: ProjectCategory.Design,
        description: "Designed a high-fidelity mobile app prototype for a 48-hour startup weekend competition, leading the team to a second-place finish.",
        tags: ["UI/UX Design", "Figma", "Prototyping", "Pitching", "Startup"],
        details: {
            problem: "In a fast-paced startup competition, our team needed to quickly conceptualize and visualize a mobile app idea to solve a specific user problem and present a compelling pitch to judges.",
            solution: "As the lead designer, I rapidly created wireframes, user flows, and a high-fidelity, clickable prototype in Figma. The prototype was a key asset in our final pitch, clearly demonstrating the app's core functionality and user experience.",
            techStack: ["Figma", "Pitch Deck Design"],
            businessImpact: "The professionally designed prototype was instrumental in securing a 2nd place win, demonstrating the power of clear UI/UX in communicating a business idea effectively under tight deadlines. This skill is crucial for agile development and securing stakeholder buy-in.",
            liveUrl: "https://www.figma.com/proto/50KsapHAIPoHggQVu5pB6J/Impact-app?node-id=0%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A2"
        }
    },
    {
        id: 16,
        title: "3D Skateboard Rendering",
        category: ProjectCategory.Fun,
        description: "A 3D modeling and rendering project to create a realistic skateboard, completed as part of an advanced graphic design course.",
        tags: ["3D Modeling", "SolidWorks", "Simulation", "Graphic Design"],
        details: {
            problem: "The challenge was to apply advanced 3D modeling techniques to create a complex, multi-part object with realistic textures and lighting, demonstrating proficiency in industrial design software.",
            solution: "Using SolidWorks, I modeled each component of the skateboard—deck, trucks, wheels, and hardware—and assembled them into a final product. I then applied textures and set up a lighting environment to produce a series of photorealistic renders.",
            techStack: ["SolidWorks"],
            businessImpact: "This project demonstrates technical proficiency in 3D design software, a skill valuable in product design, engineering, and marketing for creating visualizations and prototypes before physical production.",
            liveUrl: "https://dribbble.com/shots/21227929-Skateboard-3D-rendering-SolidWorks"
        }
    },
    {
        id: 17,
        title: "Academic Thesis Design & Workshop",
        category: ProjectCategory.Design,
        description: "Designed and facilitated a virtual workshop and comprehensive thesis on redefining future library systems, utilizing Systems Thinking and socio-technical design methods.",
        tags: ["Documentation", "Workshop Design", "Systems Thinking", "VSM", "Holacracy"],
        details: {
            problem: "Traditional public library systems face existential challenges. The goal was to research, model, and propose a viable, future-proof system for a non-profit book club, 'Aztaclub', and to document this process in a Master's thesis.",
            solution: "Conducted qualitative applied research using Socio-Technical Systems (STS) design, the Viable System Model (VSM), and Holacracy principles. Designed and facilitated a virtual participatory workshop to gather insights. The final thesis presented a modeling language and practical suggestions for organizational redesign.",
            techStack: ["MS Word", "MS PowerPoint", "Visio", "Systems Thinking"],
            businessImpact: "The project delivered actionable recommendations that helped a non-profit organization rethink its structure for future viability. The research provides a transferable model for other organizations undergoing transformation, showcasing an ability to translate complex academic theory into practical design and documentation."
        }
    }
];
