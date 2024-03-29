Feature: Inventory

    @demo2
    Scenario Outline: Demo Web Interactions
        Given login to inventory web app
        Then inventory page should list <numberofproducts>
        Then validate all products have valid price

        Examples:
            | TestID   | numberofproducts |
            | WEB_TC02 | 6                |