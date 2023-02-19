# LostAndFound
This portal helps people find their lost belongings. We build a portal where the users can put up objects found , claim objects that were put up as found and also request for finding objects that were lost.

## Features
1. Put up objects found
    - Add image
    - Mention users/requests known to possess that belonging (optional)
    - Add the location where the object was found
    - Add the time when the object was found
2. Request for a search of a lost object
    - Add image
    - Add a few locations where you think it might have been lost(initially start with a single location)
    - Add the time when the object was lost
3. Claiming found objects
    - Check if the user has an existing request for the object
    - Match the locations of the found object and the requested object
    - Ask them is matching time needed
## Setup
To setup dependenices, install ```pipenv``` and run ```pipenv sync```. You might want to run ```export PIPENV_VENV_IN_PROJECT=true``` first to create the virtualenv in the project folder. You can then activate the virtual environment with ```pipenv shell```. After getting in the virtual environment run ```pipenv sync``` to install all the depencdencies in new env.

- ```python manage.py migrate``` to create a new database.
- ```python manage.py createsuperuser``` will let you create a new user to use the admin panel for testing.
- ```python manage.py runserver``` to start a local server.
