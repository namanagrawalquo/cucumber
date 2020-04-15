# Cucumber  

## tags

To run a single tag:

- --cucumberOpts.tags "@tag1" - Run Scenarios tagged with @tag1
- --cucumberOpts.tags "not @tag1" - Run Scenarios not tagged with @tag1

If you want to run multiple tags, or specify tags not to run:

- --cucumberOpts.tags "@tag1 or @tag2" - Run Scenarios tagged with @tag1 or @tag2 or both
- --cucumberOpts.tags "@tag1 and @tag2" - Run Scenarios tagged with both @tag1 and @tag2
- --cucumberOpts.tags "@tag1 not @tag2" - Run Scenarios tagged with @tag1 that aren't tagged with @tag2

For more complex Tag Expressions you can use parenthesis for clarity, or to change operator precedence:

- --cucumberOpts.tags "@tag1 and not (@tag2 or @tag3)" - Run Scenarios tagged with tag1, where you do not have tags @tag2 or @tag3
- --cucumberOpts.tags "(not @tag1) and (@tag2 or @tag3)" - Run Scenarios not tagged with @tag1 but are tagged with @tag2 or @tag3 or both

## Additional Notes

- "/" , "./", "../" => Root directory, current working directory, and parent directory, respectively.
- https://medium.com/@tuliobluz/automa%C3%A7%C3%A3o-com-protractor-pageobject-e-cucumber-122537179ab7