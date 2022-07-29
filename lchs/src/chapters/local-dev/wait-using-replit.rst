Wait... I'm using Replit
========================

Follow your teachers instructions and modifications for the remaining chapters. 

.. index:: ! Replit


.. admonition:: Note

   #. Click on the shell tab to run a file, at the prompt type python filename

      .. figure:: figures/run_shell.png
         :alt: Run a file from the shell tab in replit workspace.
   
   #. When creating a flask app replace:
   
      .. sourcecode:: Python
         :linenos:

         if __name__ == '__main__':
            app.run()

      with:

      .. sourcecode:: Python
         :linenos:

         if __name__ == '__main__':
            app.run(
               host = '0.0.0.0',
               port = 8080
            )

   