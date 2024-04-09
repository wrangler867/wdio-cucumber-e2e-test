Feature: Inventory

    @demo2
    Scenario Outline: Demo Web Interactions
        # Given login to inventory web app
        Given As a standard user I login to inventory web app
            | UserType | Username         |
            | StdUser  | standard_user    |
            | probUser | problematic_usre |
        #Given As a problematic user I login to inventory web app
        # Then inventory page should list <numberofproducts>
        # Then validate all products have valid price

        Examples:
            | TestID   | numberofproducts |
            | WEB_TC02 | 6                |