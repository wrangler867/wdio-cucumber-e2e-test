Feature: Demo Feature

    @demo4
    Scenario Outline: Run the first demo feature
        Given google page is opened
        When search with <SearchItem>
        Then click on first search result
        Then URL should match <ExpectedURL>

        Examples:
            | TestID    | SearchItem | ExpectedURL           |
            | DEMO_TC01 | WDIO       | https://webdriver.io/ |