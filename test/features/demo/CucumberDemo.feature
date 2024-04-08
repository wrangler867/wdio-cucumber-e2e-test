@demo
Feature: Cucumber Demo
    I can have more info about the feature...
    without using gherkin keywords..
    - Questions / Clarification
    - Known issues
    - Todo

    Background: Launch google page
        Given google page is opened


    # Same step with diff keyword will still be considered a duplicate
    Scenario: Scenario name
        When search with WDIO
        Then click on first search result
        * URL should match https://webdriver.io/

    Scenario: Scenario name
        When search with webdriverio
        Then click on first search result
        * URL should match https://webdriver.io/

