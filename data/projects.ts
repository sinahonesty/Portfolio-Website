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
        category: ProjectCategory.Automation,
        description: "A lightweight, command-line interface (CLI) to-do list application built with Python to automate simple task tracking.",
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
        else:
            print('The item does not exist in the list!')
`
            },
            repoUrl: "https://github.com/sinahonesty/Coding-Portfolio/tree/main/Warm-up"
        }
    }
];