import React, { useEffect, useRef } from 'react';

const Tableau = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Insert the Tableau embed HTML
    if (containerRef.current && !containerRef.current.innerHTML) {
      containerRef.current.innerHTML = `
        <div class='tableauPlaceholder' id='viz1747655873020' style='position: relative; width: 100%; min-height: 600px;'>
          <noscript>
            <a href='#'>
              <img alt='Dashboard 1 ' src='https://public.tableau.com/static/images/ta/tableaufirst_17476558594530/Dashboard1/1_rss.png' style='border: none' />
            </a>
          </noscript>
          <object class='tableauViz' style='display:none;'>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
            <param name='embed_code_version' value='3' />
            <param name='site_root' value='' />
            <param name='name' value='tableaufirst_17476558594530/Dashboard1' />
            <param name='tabs' value='no' />
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https://public.tableau.com/static/images/ta/tableaufirst_17476558594530/Dashboard1/1.png' />
            <param name='animate_transition' value='yes' />
            <param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
            <param name='language' value='en-US' />
            <param name='filter' value='publish=yes' />
          </object>
        </div>
      `;
    }

    // Run the Tableau script after HTML is inserted
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      var divElement = document.getElementById('viz1747655873020');
      var vizElement = divElement.getElementsByTagName('object')[0];
      var screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
        vizElement.style.width = '1200px';
        vizElement.style.height = '700px';
      } else if (screenWidth >= 768) {
        vizElement.style.width = '90vw';
        vizElement.style.height = '600px';
      } else {
        vizElement.style.width = '1000px'; // full dashboard width
        vizElement.style.height = '650px';
      }

      var scriptElement = document.createElement('script');
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
      vizElement.parentNode.insertBefore(scriptElement, vizElement);
    `;
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="flex flex-col items-center py-12 px-4 md:px-12 bg-textLight">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 text-center">
        Chocolate Box Sales Overview
      </h2>
      <p className="text-lg text-center mb-8 max-w-2xl text-gray-700">
        This interactive dashboard presents chocolate box sales data segmented by salesperson and country.
        Use the filters and visual insights to track performance across regions and identify top-performing salespeople.
        <br />
        <span className="text-sm text-gray-500">[If not visible, please refresh the page]</span>
      </p>

      {/* Responsive container: scrollable on small screens */}
      <div className="w-full overflow-x-auto">
        <div ref={containerRef} className="mx-auto" />
      </div>
    </div>
  );
};

export default Tableau;
