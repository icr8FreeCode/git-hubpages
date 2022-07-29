.. _candidate-quiz:

Assignment #1: Candidate Testing
================================

You will create a console app to quiz fictional candidates for an astronaut
training program.

.. admonition:: Tip

   Approach every project as a series of smaller, testable parts. Get the
   simple parts working first and then expand the code in a systematic way.

Requirements
------------

By the END of this assignment, your program will:

#. Ask the candidate to enter their name.
#. Use a loop to ask five questions, one at a time, to the candidate.
#. Collect the candidate's answers.
#. Check those answers for accuracy (case insensitive).
#. Calculate the candidate's overall percentage.
#. Determine if the candidate did well enough to move on to the next round
   (need 80% or better to pass).
#. Display the results.

Part 1: Minimum Viable Quiz
---------------------------

#. Create variables for:

   a) the candidate's name
   b) a quiz question
   c) the correct answer
   d) the candidate's response

#. Use ``input()`` to ask for the candidate's name. Before moving to the next
   step, use ``print`` to verify that your code correctly stores the
   information.
#. Display the question and prompt the candidate for an answer. As before, use
   ``print`` to verify that your program correctly stored the answer.
#. Check the candidate's answer to see if it is correct.
#. Provide basic feedback to the candidate. This should include their name and
   whether their answer was correct.

Now remove the extra ``print`` statements from steps 2 & 3. Before moving on to
part 2, TEST your small app to make sure it works properly.

Part 2: Use Lists
-----------------

Now that your small app is working, expand it to deal with multiple questions.

#. Redefine your question and correct answer variables to be lists.
#. Fill these lists with the questions and answers shown in the table below.
#. You still need to ask for the candidate's name.
#. Using bracket notation, select one question and use that to prompt the
   candidate.
#. Compare the candidate's response to the proper entry in the answers list.
   Checking for the correct answer should be *case insensitive* (e.g. "Orbit"
   is the same as "orbit").
#. Replace the basic feedback with a ``.format()`` string.

.. list-table::
   :header-rows: 1

   * - Question
     - Answer

   * - True or False: 5000 meters = 5 kilometers.
     - "True"

   * - (5 + 3)/2 * 10 = ?
     - "40"

   * - Given the list ``[8, "Orbit", "Fuel Level", 45]``, what entry is at index 2?
     - "Fuel Level"

   * - Who was the first American woman in space?
     - "Sally Ride"

   * - What is the minimum crew size for the International Space Station (ISS)?
     - "3"

Part 3: Use Iteration to Ask All Questions
------------------------------------------

#. Add one or more loops to your code to ask *all* the questions in the quiz. 
#. Use lists to collect and check *all* of the candidate's answers.
#. Calculate the candidate's score as a percentage.
#. Determine the candidate's status (``ACCEPTED`` or ``NOT ACCEPTED``) based on
   their score. The candidate needs to earn an 80% or higher to pass.
#. Print the results.

*Helpful hint!* To calculate the candidate's percentage, use the equation:

   (Number of Correct Answers) / (Number of Questions) * 100

Example Output
^^^^^^^^^^^^^^

The output of the results should include the candidate's name, their answers,
the correct answers, the final percentage, and whether or not the candidate
passed the quiz.

Your output does NOT have to look exactly like the sample, but it should be
close to the same format.

::

   Candidate Name: Can Twin
   1) True or false: 5000 meters = 5 kilometers.
   Your Answer: false
   Correct Answer: true

   2) (5 + 3)/2 * 10 = ?
   Your Answer: 45
   Correct Answer: 40

   3) Given the array [8, "Orbit", "Fuel Level", 45], what entry is at index 2?
   Your Answer: fuel level
   Correct Answer: fuel level

   4) Who was the first American woman in space?
   Your Answer: sally ride
   Correct Answer: sally ride

   5) What is the minimum crew size for the International Space Station (ISS)?
   Your Answer: 10
   Correct Answer: 3

   >>> Overall Grade: 40% (2 of 5 responses correct) <<<
   >>> Status: NOT ACCEPTED <<<

.. admonition:: Note

   The output should change based on the candidate's answers to each question.

Final Checks
------------

Before submitting your assignment, make sure your program:

#. Does NOT consider the case when checking answers.
#. Includes at least one loop, one conditional, and one or two lists.
#. Uses ``.format()`` at least once for the output.
#. Correctly accepts or rejects a candidate based on their final score.
