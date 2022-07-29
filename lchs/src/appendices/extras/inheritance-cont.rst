Inheritance (Part 2)
====================

Add New Properties to Child Class
---------------------------------

An ``EVCar`` object needs two properties that are not defined in the ``Car``
class: ``battery_size`` and ``charge_level``.

To include these, we must define an ``__init__`` method inside the ``EVCar``
class. The idea is to inherit all of the property names from the ``Car`` class
and just add the two new ones. 

The general syntax for this is:

.. sourcecode:: python
   :linenos:

   class ChildClassName(ParentClassName):

      def __init__(self, parent_properties, new_property):
         # First, set the properties found in ParentClassName.
         ParentClassName.__init__(self, parent_properties)
         # Next, assign a value to the new property.
         self.new_property = new_property

When we call the child class, the ``__init__`` method runs in two parts. First,
it calls the parent class and completes that initialization. Next, control
returns to the ``__init__`` method in the child class, and values are assigned
to any additional properties.

#. Line 3 defines the initializer method for the child class. Note that the
   parameters include ``self`` and variables for both the parent and child
   properties.
#. Line 5 calls the ``__init__`` method from the parent class. This assigns
   values to all properties inherited from that class.
#. Line 7 creates a new property name and assigns it a value.

.. admonition:: Example

   Let's see how this works for our ``EVCar`` class:

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
         def __init__(self, make, model, year, color, battery_size):
            # Call the Car __init__ method and assign the inherited properties.
            Car.__init__(self, make, model, year, color)
            # Initialize properties specific to the EVCar class.
            self.battery_size = battery_size
            self.charge_level = 100  # Begin with 100% charge.

         def recharge(self):
            # Code for recharging the battery.
            return "Fully charged!"

      def main():
         my_car = Car('Saturn', 'SW-1', 1999, 'green')
         dream_car = EVCar('Tesla', 'Model S', 2020, 'blue', '100 kWh')

         print("my_car:", vars(my_car))
         print("dream_car:", vars(dream_car))

      if __name__ == '__main__':
         main()

   **Console Output**

   ::

      my_car: {'make': 'Saturn', 'model': 'SW-1', 'year': 1999, 'color': 'green'}
      dream_car: {'make': 'Tesla', 'model': 'Model S', 'year': 2020, 'color': 'blue', 'battery_size': '100 kWh', 'charge_level': 100}

   Lines 27 and 28 print out the property names and values for the ``Car`` and
   ``EVCar`` objects. Note that ``dream_car`` includes two properties that are
   missing from ``my_car``.

Change Existing Methods
-----------------------

On the previous page, we saw that ``EVCar`` inherits the ``honk_horn()`` method
from the ``Car`` parent class. Any ``EVCar`` object can call this method
without a problem. We also saw how to add a new method to a child class, like
the ``recharge()`` and ``refuel()`` methods for ``EVCar`` and ``GasCar``,
respectively.

What if we want the parent and child class to share a method name, but we want
the two functions to do different things?

.. index:: ! overriding methods

Python and other programming languages allow us to **override** a method
inherited from the parent class. The child class includes a method with the
same name. However, instead of using the code from the parent class, the method
contains a different set of instructions. These execute instead of the parent
code.

Let's see how this works with the ``honk_horn()`` method.

.. admonition:: Example

   We can call the ``honk_horn()`` method on a ``GasCar`` object, but the sound
   produced depends on the ``make`` of the car.

   .. sourcecode:: python
      :lineno-start: 11

      class GasCar(Car):
         def refuel(self):
            # Code for refilling the gas tank.
            return "Tank full."

         def honk_horn(self):
            if self.make == "BMW":
               return "HONK!!!"
            elif self.make == "Toyota":
               return "Beep, beep."
            elif self.make == "Plymouth":
               return "ah-OOOO-gah"
            else:
               return Car.honk_horn(self)
      
      def main():
         hybrid = GasCar('Toyota', 'Prius', 2018, 'gray')
         classic = GasCar('Plymouth', 'De Luxe', 1947, 'blue')
         guzzler = GasCar('Ford','F-150', 2019, 'red')

         print(hybrid.honk_horn())
         print(classic.honk_horn())
         print(guzzler.honk_horn())

      if __name__ == '__main__':
         main()

   **Console Output**

   ::

      Beep, beep.
      ah-OOOO-gah
      Beep!      

In this case, code in the the ``GasCar`` class (lines 16 - 24) overrides the
``honk_horn()`` method inherited from ``Car``. When we call the method on
``hybrid``, ``classic``, and ``guzzler``, the code in the child class executes.
This gives our three objects the chance to return something different than a
``Car`` object.

Notice that if ``make`` isn't ``'BMW'``, ``'Toyota'``, or ``Plymouth``, then
the ``else`` block executes:

.. sourcecode:: python
   :lineno-start: 23

   else:
      return Car.honk_horn(self)

Line 24 essentially says: *Return the same thing as a Car object*. Thus, the
``GasCar`` ``honk_horn()`` method includes the ``Car`` behavior as a backup.

Try It!
-------

In the editor below:

#. Define a ``honk_horn()`` method in the ``EVCar`` class. For now, just have
   it return a string value that is different from ``'Beep!'``.
#. In ``main()``, confirm that ``my_car`` and ``dream_car`` behave differently
   when you use the objects to call the ``honk_horn()`` method.
#. Expand the code in the child ``honk_horn()`` method to be more interesting
   than a single ``return`` statement. Be sure to include logic that calls
   the parent method if certain conditions are met.

.. raw:: html

   <iframe src="https://trinket.io/embed/python/6532425879" width="100%" height="600" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Wrap-Up
-------

*Inheritance* allows us to define new data types by extending the code from
previously defined types, like the relationship between ``Car`` and ``EVCar``.

A child class like ``EVCar`` inherits all the properties and methods of its
parent class. It can then define its own new properties and methods.

A child class can override methods inherited from the parent class but still
access the original behavior.
