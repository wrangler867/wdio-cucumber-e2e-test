Feature: Inventory

    @demo2
    Scenario Outline: Demo Web Interactions
        Given login to inventory web app
        Then inventory page should list <numberofproducts>
        #When validate all products have valid price (price > 0)

        Examples:
            | TestID   | numberofproducts |
            | WEB_TC02 | 6                |