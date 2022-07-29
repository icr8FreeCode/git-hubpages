Chapter 13: Classes and Objects
===============================

The answers on this page show ONE way to solve the :ref:`exercises <classes-and-objects-exercises>`.
However, there are usually OTHER ways to accomplish the same thing. This is OK!

   A suggested solution is ONE way to solve the problem, not the ONLY way.


Chapter Sandbox
---------------

Use the editor below to test out any of the solutions!

.. raw:: html

	<iframe src="https://trinket.io/embed/python3/560cc5a91d" width="100%" height="400" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Solutions
---------
In these exercises, you will create a ``Robot`` class and use it to create
four ``Robot`` objects. You will also practice writing functions that display
information about the objects and race them against each other.

.. _chp13part1:

Part 1: Create a New Class
^^^^^^^^^^^^^^^^^^^^^^^^^^
Open up the starter code and notice that it imports the ``random`` module.
Below the ``import`` statement, define the ``Robot`` class.

Add Properties to ``Robot``
^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. Inside the class, define the ``__init__`` method. It should include
   parameters for ``self``, ``name``, ``mass``, and ``year``.

   .. sourcecode:: Python
      :linenos:

      class Robot:
      #set up Robot Object Properties
         def __init__(self, name, mass, year):
            self.name = name
            self.mass = mass
            self.year = year
      
2. Give a default value to ``year``.

   .. sourcecode:: Python
      :linenos:

      def __init__(self, name, mass, year = 1942):

   Before you move on, test your new class! In ``main()``:

   .. sourcecode:: Python
      :linenos:

      #a. Call the ``Robot`` class to create a new object. Assign it to a variable.
      robot_bob = Robot("Bob", 42, 1974)

      #Code to test creation of Robot class
      #b. Use dot notation to ``print`` the values for each property. 
      print("\nRobot Information:")
      print("   Name: " + robot_bob.name)
      print("   Mass: " + str(robot_bob.mass) + "kg")
      print("   Year Made: " + str(robot_bob.year))
      print("   Distance Traveled: " + str(robot_bob.distance))
  
Add Methods to ``Robot``
^^^^^^^^^^^^^^^^^^^^^^^^

1. Below ``__init__``, define a second method called ``move()``. This method should:

   .. sourcecode:: Python
      :linenos:

      #a. Only take the ``self`` parameter.
      def move(self):

      #c. Increase the ``distance`` property by the number of steps.
      steps_taken = random.randint(1,10)
      self.distance += steps_taken

2. Add the ``__str__`` method to return a string of the object properties.
   
   .. sourcecode:: Python
      :linenos:

      #returns a string of robot properties of our choosing
      def __str__(self):
         output = "\nRobot Info: \n   Name: {0}\n   Mass: {1} kg\n   Year made: {2}\n   Distance traveled: {3}"
         return output.format(self.name, self.mass, self.year, self.distance) 

   Test your methods! In ``main()``:

   .. sourcecode:: Python
      :linenos:

      #a. ``print`` the ``Robot`` object to check the output.
      #Code that calls the __str__ method 
      print(robot_bob)

:ref:`Back to the exercises <chp13partNewClass>`.

.. _chp13part2:

Part 2: Create Objects
^^^^^^^^^^^^^^^^^^^^^^

In part 1, you defined a class and created one ``Robot`` object in ``main()``.
Now create three more objects:

3. Use a mass value from ``25`` to ``40``. (*Bonus*: Use ``randint`` to
   generate the mass value instead of hard-coding a number when you call the
   class).

   .. sourcecode:: Python
      :linenos:

      robot_unimate = Robot("Unimate",random.randint(25, 40), 1954)
      robot_terry = Robot("Terry", random.randint(25, 40), random.randint(1923, 2022))
      robot_jones = Robot("Jones", 42 , 1969)

   You now have 4 total robots. Add another statement in ``main()`` where you
   place the objects inside a list. Assign the collection to a variable called
   ``robots``.

   .. sourcecode:: Python
      :linenos:

      robots = [robot_bob, robot_unimate, robot_terry, robot_jones]

Update Distances
^^^^^^^^^^^^^^^^

Use a loop to iterate through the ``robots`` list. For each object, assign a
random value to the ``distance`` property, from ``1000`` to ``3000`` steps.

   .. sourcecode:: Python
      :linenos:

      #add in main
      for robot in robots:
         robot.distance = random.randint(1000, 3000)

:ref:`Back to the exercises <chp13partCreateObjects>`.

.. _chp13part3:

Part 3: Find Oldest Robot
^^^^^^^^^^^^^^^^^^^^^^^^^

Between the class and ``main()``, define a function called ``oldest_robot``. It
should:

2. Use a loop to iterate through the list.

   .. sourcecode:: Python
      :linenos:

      def oldest_robot(robot_list):
         robot_year = []
         for robot in robot_list:
            robot_born = robot.year
            robot_year.append(robot_born)

         #index value of oldest robot in robot_list
         oldest = robot_year.index(min(robot_year))

4. If two robots have the same ``year`` value, then the one with the largest
   ``distance`` will be older.
     
   .. sourcecode:: Python
      :linenos:

         #year oldest robot was made
         oldest_robot_year = robot_year[oldest]

         #checking to see if more then one robot born in oldest_robot_year
         same_year = robot_year.count(oldest_robot_year)
         
         #more then one robot born in oldest year
         if same_year > 1:
            #distance in steps of oldest robot
            oldest_robot_distance = robot_list[oldest].distance
            
            for index in range(len(robot_year)):
               year = robot_list[index].year
               if year == oldest_robot_year:
               if robot_list[index].distance > oldest_robot_distance:
                  oldest_robot_distance = robot_list[index].distance
                  oldest = index

         #Return the index value for the oldest robot in the list.
         return oldest

   In ``main()``, call the ``oldest_robot`` function and use ``robots`` for the
   argument. Assign the returned index to a new variable.

   .. sourcecode:: Python
      :linenos:

      #create variable and call function
      index_oldest = oldest_robot(robots)

   Print out a message describing the result:

   .. sourcecode:: Python
      :linenos:

      print(f"\n{robots[index_oldest].name} is the oldest robot (made in {robots[index_oldest].year},
       {robots[index_oldest].distance} steps).\n") 
  

:ref:`Back to the exercises <chp13partFindOldest>`.

.. _chp13part4:

Part 4: Robot Races
-------------------

Now it's time for the robots to compete against each other! Define the
``robot_race`` function that takes a list of robots as a parameter.

Within the function:

1. Each robot takes a turn running a race.
2. A robot runs the race by calling its ``move()`` method several times.
3. A robot is done with the race when it moves 30 steps or more.

4. Create a new list to store how many turns it takes each robot to complete
   the race. Use the string: ``'____ took ____ turns to take 30 steps.'``
   Fill in the blanks with the robot’s name and race result.

   .. sourcecode:: Python
      :linenos:

      #create empty list for results of each robot(part 4)
      results = []
      #loop thru robots(part 1)
      for robot in robots:
         #set variables 
         steps = 0
         turns = 0
         #keep taking turns until robot gets at least 30 steps(part 2-3)
         while steps <= 30:
            steps += robot.move()
            turns += 1
         #add string with robot results to results list(part 4)
         results.append(f"{robot.name} took {turns} turns to take {steps} steps.")
        
5. Print the results to the console (one robot per line).

   .. sourcecode:: Python
      :linenos:

      #in main
      #create variable and call function
      robot_race_results = robot_race(robots)
  
      for result in robot_race_results:
         print(result)

:ref:`Back to the exercises <chp13partRobotRaces>`.