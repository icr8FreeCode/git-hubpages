.. _class-inheritance:

Inheritance (Part 1)
====================

Throughout this textbook, we try to follow the simple goal of *Don't Repeat
Yourself* (DRY). Loops, functions, modules, objects, etc. allow us to create
and then reuse blocks of code. Classes are no different.

Imagine we have two objects that are very similar but not *quite* the same. One
example would be an electric car compared to one that runs on gasoline. Both
are cars, and they share a number of properties and behaviors. However, there
are definite differences between the two.

We could code separate ``EVCar`` and ``GasCar`` classes, but notice how each
one repeats some of the same code:

.. admonition:: Example

   .. sourcecode:: python
      :linenos:

      class EVCar:
         def __init__(self, make, model, year, color, battery_size):
            self.make = make
            self.model = model
            self.year = year
            self.color = color
            self.battery_size = battery_size
            self.charge_level = 100  # Begin with 100% charge.

         def honk_horn(self):
            return "Beep!"

         def recharge(self):
            # Code for recharging the battery.

         def drive(self):
            # Code for decreasing charge_level after moving.

      class GasCar:
         def __init__(self, make, model, year, color, tank_size):
            self.make = make
            self.model = model
            self.year = year
            self.color = color
            self.tank_size = tank_size
            self.fuel_level = tank_size   # Begin with a full tank.

         def honk_horn(self):
            return "Beep!"

         def refuel(self):
            # Code for refilling the gas tank.

         def drive(self):
            # Code for decreasing fuel_level after moving.

.. index:: ! inheritance, ! parent class, ! child class

**Inheritance** refers to one class taking the same properties and methods from
a different one. In the example above, the two classes share the ``make``,
``model``, ``year``, and ``color`` property names. The classes also share the
same code for the ``honk_horn`` method.

Instead of repeating statements, we define a **parent class** to hold all of
the shared code. Next, we add **child classes**, which will *inherit* the
shared code. Finally, we add new properties and methods to the child classes.
This makes them distinct from each other, but they are both related to the same
parent.

Let's work through an example.

Define a Parent Class
---------------------

First, we want to define the parent class called ``Car``. It holds the
properties and one method that ``EVCar`` and ``GasCar`` share.

.. admonition:: Example

   .. sourcecode:: python
      :linenos:

      class Car:
         def __init__(self, make, model, year, color):
            self.make = make
            self.model = model
            self.year = year
            self.color = color

         def honk_horn(self):
            return "Beep!"

The ``Car`` class is fully functional, and we can use it to create multiple
``Car`` objects with different makes, models, years, and colors.

Define a Child Class
--------------------

.. index:: ! subclass

Now let's add a child class (also called a **subclass**) that inherits the code
contained in ``Car``.

The general syntax to define a child class is:

.. sourcecode:: python

   class ChildClassName(ParentClassName):

By placing ``ParentClassName`` inside the parentheses ``()``, we link
``ChildClassName`` to all of the code the parent contains.

Let's start with ``EVCar``, and for now we will only add one new method:

.. admonition:: Example

   The following program creates one ``Car`` object and one ``EVCar`` object.
   Notice that the ``EVCar`` class does not include an ``__init__`` method.

   .. sourcecode:: python
      :linenos:

      class Car:
         def __init__(self, make, model, year, color):
            self.make = make
            self.model = model
            self.year = year
            self.color = color

         def honk_horn(self):
            return "Beep!"

      class EVCar(Car):
         def recharge(self):
            # Code for recharging the battery.
            return "Fully charged!"

      def main():
         my_car = Car('Saturn', 'SW-1', 1999, 'green')
         dream_car = EVCar('Tesla', 'Model S', 2020, 'blue')

         print(type(my_car), type(dream_car))
         print(my_car.make, my_car.honk_horn())
         print(dream_car.make, dream_car.honk_horn())

         print(dream_car.recharge())
         print(my_car.recharge())

      if __name__ == '__main__':
         main()

   **Console Output**

   ::

      <class '__main__.Car'> <class '__main__.EVCar'>
      Saturn Beep!
      Tesla Beep!
      Fully charged!
      File "main.py", line 25, in main
         print(my_car.recharge())
      AttributeError: 'Car' object has no attribute 'recharge'

#. Lines 17 and 18 call the two classes and create the ``Car`` and ``EVCar``
   objects. Note that both statements include the same number and types of
   arguments.
#. Line 20 shows us that ``my_car`` and ``dream_car`` are different data types.
#. Line 21 prints the ``make`` property and calls the ``honk_horn`` method for
   the ``Car`` object.
#. Line 22 shows us that even without its own ``__init__`` method, properties
   were assigned to the ``EVCar`` object. ``dream_car`` can also call the
   ``Car`` method ``honk_horn``!
#. Lines 24 and 25 show us that ``dream_car`` can call the ``EVCar`` method
   ``recharge``, but ``my_car`` cannot.

This is what inheritance does! It allows a subclass to use the ``__init__`` and
other methods defined in the parent class.

.. admonition:: Try It!

   In the editor below:
   
   #. Add the ``GasCar`` child class to the program. It should inherit from the
      ``Car`` parent class.
   #. Add a simple ``refuel`` method that returns the string ``'Tank full'``.
   #. In ``main()``, test your new class:
   
      a. Create a ``GasCar`` object and print its data type.
      b. Print one or more of its properties, and call the ``honk_horn``
         method.
      c. Call the ``refuel`` method and print the returned string.
      d. Verify that the ``my_car`` and ``dream_car`` objects cannot call the
         ``refuel()`` method.

   .. raw:: html

      <iframe src="https://trinket.io/embed/python/d77c290132" width="100%" height="500" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Similar, but Different
----------------------

Notice that ``EVCar`` and ``GasCar`` objects need to include properties that
are NOT defined in the ``Car`` class: ``battery_size``, ``charge_level``,
``tank_size``, and ``fuel_level``.

On the next page, we will learn how to add new properties to a child class.
