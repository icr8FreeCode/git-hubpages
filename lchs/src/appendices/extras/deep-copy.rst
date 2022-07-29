.. _deep-copy:

Copying Objects
===============

With both :ref:`lists <cloning-lists>` and :ref:`dictionaries <dictionary-copy-example>`,
using an assignment statement like ``list_b = list_a`` does NOT make a separate
copy of the data. Instead, the statement just creates a new label (``list_b``)
that points to the same memory location.

To make an independent clone of a list or dictionary, we use the ``.copy()``
method. Lists and dictionaries are both object types, and the class for each
one contains a set of code for making the copy.

What if an object does not have a ``.copy()`` method? We can still make an
independent clone, but the process is a little more involved. 

Shallow Copy
------------

Let's begin by reviewing how a simple assignment statement operates on an
object. 

.. admonition:: Example

   Line 11 creates a new object of type ``Student``, and line 12 creates a new
   *label* for the same object. ``student_1`` and ``student_2`` point to the
   same memory location.

   .. sourcecode:: Python
      :linenos:

      class Student:
         def __init__(self, name, id, scores):
            self.name = name
            self.id = id
            self.scores = scores

         def average(self):
            return round(sum(self.scores)/len(self.scores), 1)

      def main():
         student_1 = Student("Maria", 1234, [88, 95, 93])
         student_2 = student_1

         student_2.id = 7890  # Reassign the id value using student_2.

         # Print out the property values for student_1 and student_2.
         print("student_1 =", vars(student_1))
         print("student_2 =", vars(student_2))

         student_3 = student_1.copy()

      main()

   **Console Output**

   ::

      student_1 = {'name': 'Maria', 'id': 7890, 'scores': [88, 95, 93]}
      student_2 = {'name': 'Maria', 'id': 7890, 'scores': [88, 95, 93]}

      File "main.py", line 20, in main
         student_3 = student_1.copy()
      AttributeError: 'Student' object has no attribute 'copy'

   The change we make to the ``id`` property on line 14 shows up when print
   both ``student_1`` and ``student_2``. They are the same object, so changes
   made with one label show up when we use the other. 

   Note that line 20 throws an error. While list and dictionary objects both
   have defined ``.copy()`` methods, our ``Student`` object type does not.

Fortunately, we do not need to add a method to our ``Student`` class to copy
the objects. Python comes with a module, called ``copy``, that contains the
functions we need.

.. _copy-deepcopy-try-it:

.. admonition:: Try It!

   In the editor below, note that we import one function from the ``copy``
   module. Not surprisingly, it's called ``copy``.

   The general syntax is:

   .. sourcecode:: Python

      from copy import copy
      new_object = copy(old_object)

   #. Run the program as-is first to verify that ``student_1`` and
      ``student_2`` are the same object. Note the output from the three
      ``print`` statements.
   #. Replace line 14 with the statement ``student_2 = copy(student_1)``.
   #. Rerun the program and note the change in the output. With the updated
      code, ``student_1`` and ``student_2`` now represent different objects.

      Note that ``student_1 is student_2`` evaluates to ``False`` even when all
      of their property values match.

   .. raw:: html

      <iframe src="https://trinket.io/embed/python3/d235980037" width="100%" height="500" frameborder="1" marginwidth="0" marginheight="0" allowfullscreen></iframe>

While convenient, the ``copy()`` function is not the full story. It produces
what programmers call a *shallow copy* of an object. We will see what this
means in the next section.

Deep Copy
---------

.. index:: ! shallow copy

A **shallow copy** of an object creates a new, independent object. However,
some of the data in the new and old objects might still be linked. We can see
this in the following example.

.. admonition:: Example

   Once again, we create the ``student_1`` object from the ``Student`` class
   and clone it with ``student_2 = copy(student_1)``.

   Let's see what happens when we try changing one value in the list assigned
   to the ``scores`` property.

   .. sourcecode:: python
      :lineno-start: 11

      def main():
         student_1 = Student("Maria", 1234, [88, 75, 93])
         student_2 = copy(student_1)    # Make a shallow copy of student_1.

         # Reassign the id value in student_2:
         student_2.id = 7890

         # Reassign the first value in the student_2 scores list:
         student_2.scores[0] = 100

         print("student_1 =", vars(student_1))
         print("student_2 =", vars(student_2))

      main()

   **Console Output**

   ::

      student_1 = {'name': 'Maria', 'id': 1234, 'scores': [100, 75, 93]}
      student_2 = {'name': 'Maria', 'id': 7890, 'scores': [100, 75, 93]}

Hmmm. The output shows us that changing the ``id`` value for ``student_2`` does
NOT change the ``id`` for ``student_1``. However, changing the first value in the
``scores`` list for ``student_2`` affects BOTH objects. Even though
``student_1`` and ``student_2`` are different objects, they are not quite
independent of each other yet.

The reason for this involves how the ``scores`` property relates to the list.
When line 12 calls the class and ``__init__`` runs, the value assigned to
``scores`` isn't ``[88, 75, 93]``. Instead ``scores`` is assigned a *reference
to a memory location*. The actual list is stored at that memory location. The
value assigned to ``scores`` just points to it.

When we make the shallow copy in line 13, ``student_2`` assigns the same
memory reference to ``scores``. Even though the two objects are different, both
``scores`` properties point to the same data in memory. This is why changing
``[88, 75, 93]`` to ``[100, 75, 93]`` for ``student_2`` also affects
``student_1``.

Think of each ``Student`` object as having two layers inside of it. The first
layer includes references to memory locations. The second layer is the actual
data stored. A shallow copy only goes one layer deep. It duplicates the memory
references, but it does not create new sets of the original data.

.. index:: ! deep copy

To make a full, independent clone of an object, we must make a **deep copy**.
A deep copy takes the original data and creates clones of that data in new
memory locations. The cloned object uses these new locations as its property
values.

The syntax for making a deep copy is very similar to using ``copy()``:

.. sourcecode:: Python

   from copy import deepcopy
   new_object = deepcopy(old_object)

.. admonition:: Try It!

   In the :ref:`editor above <copy-deepcopy-try-it>`:
   
   #. Replace line 1 with ``from copy import copy, deepcopy``.
   #. Replace line 14 with ``student_2 = deepcopy(student_1)``.
   #. Add ``student_2.scores[0] = 100`` before the final ``print`` statements.
   #. Rerun the program to verify that changing the ``scores`` values for
      ``student_2`` no longer affects ``scores`` for ``student_1``.
