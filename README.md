A Url shortner React Native app

# HomePage ( Logged out )

Navbar

SignIn

SignUp

Presentation

# HomePage ( LoggedIn )

<!-- http://www.network-science.de/ascii/ banner
 #####                                #                          #
#     # #    #  ####  #####  #####    #       # #    # #    #    #       #  ####  #####
#       #    # #    # #    #   #      #       # ##   # #   #     #       # #        #
 #####  ###### #    # #    #   #      #       # # #  # ####      #       #  ####    #
      # #    # #    # #####    #      #       # #  # # #  #      #       #      #   #
#     # #    # #    # #   #    #      #       # #   ## #   #     #       # #    #   #
 #####  #    #  ####  #    #   #      ####### # #    # #    #    ####### #  ####    #
 -->

## Small Links Page

### Props

- smallLinks : Array<SmallLinkType>

## Small Link List

- Display all created small links
- Display Text if no elements
- Search by name V2
- Sort by creation Date ASC / DESC V2
- Pagination V2

### Props

- smallLinks : Array<SmallLinkType>
- onLinkRemovedCallBack : (link) ⇒ ()

### Testing

1. it(”should display “no links, let’s create one” if no links passed”)
2. it(”should display as much element as links length”)
3. it(”should call onLinkRemovedCallBack when clicking on the remove icon of the first element”)
4. it(”should call onLinkRemovedCallBack with link as param when clicking on the remove icon of the first element”)

<!-- http://www.network-science.de/ascii/ banner
 #####                                #                          ######
#     # #    #  ####  #####  #####    #       # #    # #    #    #     # #  ####  #####  #        ##   #   #
#       #    # #    # #    #   #      #       # ##   # #   #     #     # # #      #    # #       #  #   # #
 #####  ###### #    # #    #   #      #       # # #  # ####      #     # #  ####  #    # #      #    #   #
      # #    # #    # #####    #      #       # #  # # #  #      #     # #      # #####  #      ######   #
#     # #    # #    # #   #    #      #       # #   ## #   #     #     # # #    # #      #      #    #   #
 #####  #    #  ####  #    #   #      ####### # #    # #    #    ######  #  ####  #      ###### #    #   #
-->

## Small Link Display component

- Name
- Long url ( hidden by default )
- Short Url
- “Edit” button
- “Remove” button
- Activated / Deactivated V2
- Share Button V2
- Tags V2

### Props

- smallLink : SmallLinkType
- editCallback : SmallLink type ⇒ void
- removeCallBack : SmallLink type ⇒ void
- shareCallBack : SmallLink type ⇒ void

### Testing

1. it(”should display the name “Link name” when passed as props)
2. it(”should display the long url “http://www.google.fr” when passed as props)
3. it(”should display the small link as activated if activated is true”)
4. it(”should display the small link as deactivated if activated is false”)
5. it(”should display the correct tags when passed as props)
6. if(”should display “no tags” if no tag in current small link)
7. it(”should have a button to edit this Small Link”)
8. it(”should call editCallback when the button is clicked”)
9. it(”should call editCallback when the edit button is clicked with the smallLink passed as props”)
10. it(”should have a button to remove this Small Link”)
11. it(”should call the removeCallBack when the remove button is clicked”)
12. it(”should call the removeCallBack when the remove button is clicked with the smallLink passed as props”)
13. it(”should have a share button to share this Small Link”)
14. it(”should call shareCallBack when the share button is clicked”)
15. it(”should call shareCallBack when the share button is clicked with the smallLink passed as props”)

<!-- http://www.network-science.de/ascii/ banner

 #####                                #                          #######
#     # #    #  ####  #####  #####    #       # #    # #    #    #       #####  # #####
#       #    # #    # #    #   #      #       # ##   # #   #     #       #    # #   #
 #####  ###### #    # #    #   #      #       # # #  # ####      #####   #    # #   #
      # #    # #    # #####    #      #       # #  # # #  #      #       #    # #   #
#     # #    # #    # #   #    #      #       # #   ## #   #     #       #    # #   #
 #####  #    #  ####  #    #   #      ####### # #    # #    #    ####### #####  #   #
 -->

## Small Link Edit component

- Name
- Long url
- Short Url ( can’t be edited )
- Activated / Deactivated V2
- Validate button
- Cancel button
- Add remove tags V2

### Props

- smallLink : SmallLinkType
- validationCallback : SmallLink type ⇒ void
- cancelCallBack

### Testing

1. it(”should pre-fill the name “Link name” when passed as props)
2. it(”should pre-fill the long url “http://www.google.fr” when passed as props)
3. it(”should display the small link as activated if activated is true”)
4. it(”should display the small link as deactivated if activated is false”)
5. it(”should display the correct tags when passed as props)
6. if(”should display “no tags” if no tag in current small link)
7. it(”should call validationCallback when clicking on validate”)
8. it(”should call validationCallback with exactly the same smallLink when clicking on validate without having changing anything”)
9. it(”should not let the user validate and display a message if link name is empty”)
10. it(”should not let the user validate and display a message if link long Url is empty”)
11. it(”should call cancelCallBack when clicking on cancel”)
12. it(”changing the url should remove the old short link and have changed the current one”)

<!-- http://www.network-science.de/ascii/ banner
 #####                                #                           #####
#     # #    #  ####  #####  #####    #       # #    # #    #    #     # #####  ######   ##   ##### #  ####  #    #
#       #    # #    # #    #   #      #       # ##   # #   #     #       #    # #       #  #    #   # #    # ##   #
 #####  ###### #    # #    #   #      #       # # #  # ####      #       #    # #####  #    #   #   # #    # # #  #
      # #    # #    # #####    #      #       # #  # # #  #      #       #####  #      ######   #   # #    # #  # #
#     # #    # #    # #   #    #      #       # #   ## #   #     #     # #   #  #      #    #   #   # #    # #   ##
 #####  #    #  ####  #    #   #      ####### # #    # #    #     #####  #    # ###### #    #   #   #  ####  #    #
  -->

## Small Link Creation component

- Name
- Long url
- Activated / Deactivated V2
- Validate button
- Cancel button
- Add tags V2

### Props

- validationCallback : { name, longUrl, Activated, tags }
- CancelCallBack

### Testing

1. it(”should have an empty name input”)
2. it(”should have a name input with a placeholder of “name” )
3. it(”should have a empty Long url input” )
4. it(”should have a Long url input with a placeholder of “Long url ” )
5. it(”should have an activated switch checked by default”)
6. it(”should not call validationCallback with an empty name”)
7. it(”should display an error when validating with an empty name”)
8. it(”should not call validationCallback with an empty Long url”)
9. it(”should display an error when validating with an empty Long url”)
10. it(”should call validationCallback with all input entered and clicking on validate button”)
11. it(”should call validationCallback with {name :”toto”, longUrl : “[https://toto.com](https://toto.com)”, activated : false, tags : [”tag1”,”tag2”]} when clicking on validate button and having entered toto as name [https://toto.com](https://toto.com) as Long url, activated as false, and tags as tag1, tag2 ”)

<!-- http://www.network-science.de/ascii/ banner
 #####                                #                          ######
#     # #    #  ####  #####  #####    #       # #    # #    #    #     # ###### #    #  ####  #    # ######
#       #    # #    # #    #   #      #       # ##   # #   #     #     # #      ##  ## #    # #    # #
 #####  ###### #    # #    #   #      #       # # #  # ####      ######  #####  # ## # #    # #    # #####
      # #    # #    # #####    #      #       # #  # # #  #      #   #   #      #    # #    # #    # #
#     # #    # #    # #   #    #      #       # #   ## #   #     #    #  #      #    # #    #  #  #  #
 #####  #    #  ####  #    #   #      ####### # #    # #    #    #     # ###### #    #  ####    ##   ######
-->

## Small Link Remove component

- Popin
- Validation text
- Validate button
- Cancel Button

### Props

- title : string
- validationText : string
- cancelText : string
- validationCallback : smallLink : SmallLinkType ⇒ void
- CancelCallBack : () ⇒ void

### Testing

1. it(”should have a title”)
2. it(”should have a title with a value of “title” if “title” is passed as props”)
3. it(”should have a validate button”)
4. it(”should have a validate button with a value of “validate” if “validate” is passed as validationText props”)
5. it(”should have a cancel button”)
6. it(”should have a cancel button with a value of “cancel” if “cancel” is passed as cancelText props”)
7. it(”should call CancelCallBack when clicking on cancel button”)
8. it(”should call validationCallback when clicking on validate button”)

<!-- http://www.network-science.de/ascii/ banner

#######                          #####
   #      ##    ####   ####     #     # #####  ######   ##   ##### #  ####  #    #    # #    # #####  #    # #####
   #     #  #  #    # #         #       #    # #       #  #    #   # #    # ##   #    # ##   # #    # #    #   #
   #    #    # #       ####     #       #    # #####  #    #   #   # #    # # #  #    # # #  # #    # #    #   #
   #    ###### #  ###      #    #       #####  #      ######   #   # #    # #  # #    # #  # # #####  #    #   #
   #    #    # #    # #    #    #     # #   #  #      #    #   #   # #    # #   ##    # #   ## #      #    #   #
   #    #    #  ####   ####      #####  #    # ###### #    #   #   #  ####  #    #    # #    # #       ####    #
-->

## Tag Creation component

- Input
- Add button

### Props

- placeholder : string
- validationText : string
- onAddTagCallBack : (tag) ⇒ ()

### Testing

1. it('should render the Tag Creation Input ')
2. it('should have a placeholder of "enter new tag" when passed as placeholder prop')
3. it('should have a button with text "add tag" when passed as validationText prop')
4. it('should not be able to add a tag if the input is empty')
5. it('should be able to add a tag if the input is not empty')

<!-- http://www.network-science.de/ascii/ banner
#######                  ######
   #      ##    ####     #     # #  ####  #####  #        ##   #   #
   #     #  #  #    #    #     # # #      #    # #       #  #   # #
   #    #    # #         #     # #  ####  #    # #      #    #   #
   #    ###### #  ###    #     # #      # #####  #      ######   #
   #    #    # #    #    #     # # #    # #      #      #    #   #
   #    #    #  ####     ######  #  ####  #      ###### #    #   #
-->

## Tag Display component

- When in creation mode : display the tag with a cross on the right
- When in display mode : display the tag

### Props

- text
- isCreation : boolean
- onRemoveTagCallBack: tag ⇒ void

### Testing

1. it('should render the Tag component')
2. it('should display text "tag1" if text value is "tag1"')
3. it('should display a cross if text value is “tag1” and isCreation is true')
4. it('should not display a cross if text value is “tag1” and isCreation is false')
5. it('should not display anything if text is empty')
6. it('should not display anything if text is null')
7. it('should call removeTagCallBack with "tag1" if text value is "tag1", isCreation is true and the cross is clicked')

<!-- http://www.network-science.de/ascii/ banner
#######                         #
   #      ##    ####   ####     #       #  ####  #####
   #     #  #  #    # #         #       # #        #
   #    #    # #       ####     #       #  ####    #
   #    ###### #  ###      #    #       #      #   #
   #    #    # #    # #    #    #       # #    #   #
   #    #    #  ####   ####     ####### #  ####    #
-->

## Tags List Display component

- List of tags handling creation and display mode

### Props

- Tags : Array<string>
- isCreationMode : boolean
- onTagRemoveCallBack : (tag) ⇒ ()

### Testing

1. it('should render the TagsComponent component')
2. it('should find each element of the UI in creation mode')
3. it('should find each element of the UI in display mode')
4. it('it should not add two times the same tag')

<!-- http://www.network-science.de/ascii/ banner

#######                          #####
   #      ##    ####   ####     #     #  ####  #    # #####   ####  #    # ###### #    # #####
   #     #  #  #    # #         #       #    # ##  ## #    # #    # ##   # #      ##   #   #
   #    #    # #       ####     #       #    # # ## # #    # #    # # #  # #####  # #  #   #
   #    ###### #  ###      #    #       #    # #    # #####  #    # #  # # #      #  # #   #
   #    #    # #    # #    #    #     # #    # #    # #      #    # #   ## #      #   ##   #
   #    #    #  ####   ####      #####   ####  #    # #       ####  #    # ###### #    #   #
-->

## Tags component

- Main component of the tags

### Props

- title : string
- tags : Array<string>
- isCreation : boolean
- onListUpdated : (tags) ⇒ ()

### Testing

- it('should render the TagsComponent component')
- it('should find each element of the UI in creation mode')
- it('should find each element of the UI in display mode')
- it('it should not add two times the same tag')

<!-- http://www.network-science.de/ascii/ banner

#######                          #####
   #      ##    ####   ####     #     #  ####  #####  ###### ###### #    #
   #     #  #  #    # #         #       #    # #    # #      #      ##   #
   #    #    # #       ####      #####  #      #    # #####  #####  # #  #
   #    ###### #  ###      #          # #      #####  #      #      #  # #
   #    #    # #    # #    #    #     # #    # #   #  #      #      #   ##
   #    #    #  ####   ####      #####   ####  #    # ###### ###### #    #
-->

## Tags Screen e2e testing

- it('should display the Home Page ')
- it('should Go to Tags ')
- it('should add one single tag ')
- it('should remove a tag ')

<!-- http://www.network-science.de/ascii/ banner

#######
   #    #   # #####  ######  ####
   #     # #  #    # #      #
   #      #   #    # #####   ####
   #      #   #####  #           #
   #      #   #      #      #    #
   #      #   #      ######  ####
-->

## Types

### SmallLink

- id
- owner ( User )
- name ( Unique ⇒ V2 )
- longUrl
- smallUrl
- creation date
- Activated / Deactivated V2
- tags ( V2 )
