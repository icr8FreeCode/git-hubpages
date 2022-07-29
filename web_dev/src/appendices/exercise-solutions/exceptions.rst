.. _exceptions-exercise-solutions:

Exercise Solutions: Exceptions
==============================

.. _exceptions-exercise-solutionsA:

Zero Division: Throw
--------------------


.. sourcecode:: js
   :linenos:

   function divide(numerator, denominator) {
      if (denominator === 0) {
         throw Error('You cannot divide by zero!'); 
      }
      return numerator/denominator;
   }


:ref:`Back to the exercises <exercises-exceptions>`