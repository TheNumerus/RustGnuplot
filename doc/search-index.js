var searchIndex = {};
searchIndex['gnuplot'] = {"items":[[0,"","gnuplot","A simple gnuplot controller."],[1,"Figure","","A figure that may contain multiple axes"],[1,"Axes2D","","2D axes that is used for drawing 2D plots"],[1,"Axes3D","","3D axes that is used for drawing 3D plots"],[2,"Coordinate","","Specifies how to interpret the coordinate passed to a plotting command"],[12,"Graph","","Coordinates are done relative to a graph (i.e. an axis set). (0, 0) is the bottom left corner and (1, 1) is the top right corner.\nYou'd use this to place labels and other objects so that they remain in the same place relative to the graph no matter what you have plotted.",0],[12,"Axis","","Coordinates match those on the axes. You'd use this to place labels and other objects relative to regions of interest in the graph (e.g. labeling the peak of a function)",0],[2,"PlotOption","","An enumeration of plot options you can supply to plotting commands, governing\nthings like line width, color and others"],[12,"PointSymbol","","Sets the symbol used for points. The valid characters are as follows:",1],[12,"PointSize","","Sets the size of the points. The size acts as a multiplier, with 1.0 being the default.",1],[12,"Caption","","Sets the caption of the plot element. Set to empty to hide it from the legend.",1],[12,"LineWidth","","Sets the width of lines.",1],[12,"Color","","Sets the color of the plot element. The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white). This specifies the fill color of a filled plot.",1],[12,"BorderColor","","Sets the color of the border of a filled plot (if it has one). The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white).",1],[12,"LineStyle","","Sets the style of the line. Note that not all gnuplot terminals support dashed lines. See DashType for the available styles.",1],[12,"FillAlpha","","Sets the transparency of a filled plot. `0.0` - fully transparent, `1.0` - fully opaque",1],[12,"FillRegion","","Sets the fill region. See FillRegion for the available regions.",1],[12,"ArrowType","","Sets what an arrowhead looks like",1],[12,"ArrowSize","","Sets the size of the arrowhead. This is specified in the units of graph (i.e. `1.0` would make the arrow as big as the graph).",1],[2,"FillRegionType","","An enumeration of possible fill regions"],[12,"Above","","",2],[12,"Below","","",2],[12,"Between","","",2],[2,"AlignType","","An enumeration of possible text and label alignments"],[12,"AlignLeft","","",3],[12,"AlignRight","","",3],[12,"AlignCenter","","",3],[12,"AlignTop","","",3],[12,"AlignBottom","","",3],[2,"DashType","","An enumeration of possible dash styles"],[12,"Solid","","",4],[12,"SmallDot","","",4],[12,"Dot","","",4],[12,"Dash","","",4],[12,"DotDash","","",4],[12,"DotDotDash","","",4],[2,"ArrowheadType","","An enumeration of possible arrow head styles"],[12,"Open","","An arrow head shaped like a 'V'",5],[12,"Closed","","An arrow head shaped like an outlined triangle",5],[12,"Filled","","An arrow head shaped like a filled triangle",5],[12,"NoArrow","","No arrow head",5],[2,"AutoOption","","An enumeration of something that can either be fixed (e.g. the maximum of X values),\nor automatically determined"],[12,"Fix","","Fixes the value to a specific value",6],[12,"Auto","","Lets the value scale automatically",6],[2,"LabelOption","","An enumeration of label options that control label attributes"],[12,"TextOffset","","Sets the offset of the label in characters",7],[12,"Font","","Sets the font of the label. The string specifies the font type (e.g. \"Arial\") and the number specifies the size (the units are terminal dependent, but are often points)",7],[12,"TextColor","","Sets the color of the label text. The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white)",7],[12,"Rotate","","Rotates the label by a certain number of degrees",7],[12,"TextAlign","","Sets the horizontal alignment of the label text (default is left alignment). See AlignType.",7],[12,"MarkerSymbol","","Sets a marker for the label. By default no marker is drawn. The valid characters are as follows:",7],[12,"MarkerColor","","Sets the color of the marker. The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white)",7],[12,"MarkerSize","","Sets the size of the marker. The size acts as a multiplier, with 1.0 being the default.",7],[2,"TickOption","","An enumeration of axis tick options"],[12,"OnAxis","","Specifies whether the ticks are drawn at the borders of the plot, or on the axis",8],[12,"Mirror","","If the axes are drawn on the border, this specifies whether to draw the ticks on the opposite border as well",8],[12,"Inward","","If the axes are drawn on the border, this specifies whether to draw the ticks pointing inward or outward",8],[12,"MinorScale","","Sets the scale of the minor ticks",8],[12,"MajorScale","","Sets the scale of the major ticks",8],[2,"Tick","","Specifies a type of axis tick"],[12,"Major","","Major ticks have position and an optional label. The label may have a single C-style format specifier which will be replaced by the location of the tick",9],[12,"Minor","","Minor ticks only have position",9],[2,"BorderLocation2D","","Plot border locations"],[12,"Bottom","","",10],[12,"Left","","",10],[12,"Top","","",10],[12,"Right","","",10],[2,"LegendOption","","Legend options"],[12,"Reverse","","Puts curve samples to the left of the label",11],[12,"Invert","","Displays legend entries in opposite order",11],[12,"Horizontal","","Makes the legend horizontal (default is vertical)",11],[12,"Placement","","Specifies the location of the legend. The first argument specifies the horizontal\nplacement with respect to its position, and the second argument specifies the vertical placement",11],[12,"Title","","Title of the legend",11],[12,"MaxRows","","Specifies the maximum number of rows, when the legend is vertical",11],[12,"MaxCols","","Specifies the maximum number of columns, when the legend is horizontal",11],[2,"ContourStyle","","Specifies how the contours are drawn"],[12,"Linear","","Draw lines between points of equal value",12],[12,"Cubic","","Draw somewhat smoother curves between points with equal value.",12],[12,"Spline","","Draw an even smoother curve, this time approximating the locations of\npoints with equal value (clamped to range from 2 to 100).",12],[2,"PaletteType","","Specifies what sort of palette to use"],[12,"Gray","","Use a gray palette with a specified gamma",13],[12,"Formula","","Use a palette with that uses a predefined formula for each color component.\nEach formula is identified by an integer between [-36, 36]. See gnuplot documentation, or use the pre-defined constants.",13],[12,"CubeHelix","","Use a cube helix palette, with a certain start (in radians), cycles, saturation and gamma.",13],[10,"set_border","","Sets the properties of the plot border",14],[10,"set_x_axis","","Sets the properties of x axis.",14],[10,"set_y_axis","","Like `set_x_axis` but for the y axis.",14],[10,"arrow","","Adds an arrow to the plot. The arrow is drawn from `(x1, y1)` to `(x2, y2)` with the arrow point towards `(x2, y2)`.\n# Arguments\n* `x1` - X coordinate of the arrow start\n* `y1` - Y coordinate of the arrow start\n* `x2` - X coordinate of the arrow end\n* `y2` - Y coordinate of the arrow end\n* `options` - Array of PlotOption controlling the appearance of the arrowhead and arrow shaft. Relevant options are:\n     * `ArrowType` - Specifies the style of the arrow head (or an option to omit it)\n     * `ArrowSize` - Sets the size of the arrow head (in graph units)\n     * `Color` - Specifies the color of the arrow\n     * `LineStyle` - Specifies the style of the arrow shaft\n     * `LineWidth` - Specifies the width of the arrow shaft",14],[10,"set_legend","","Specifies the location and other properties of the legend\n# Arguments\n* `x` - X coordinate of the legend\n* `y` - Y coordinate of the legend\n* `label_options` - Array of LegendOption options\n* `text_options` - Array of LabelOption options specifying the appearance of the plot titles. Valid options are:\n    * `Font`\n    * `TextColor`\n    * `TextAlign(AlignLeft)`\n    * `TextAlign(AlignRight)`",14],[10,"lines","","Plot a 2D scatter-plot with lines connecting each data point\n# Arguments\n* `x` - Iterator for the x values\n* `y` - Iterator for the y values\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `LineWidth` - Sets the width of the line\n    * `LineStyle` - Sets the style of the line\n    * `Color` - Sets the color",14],[10,"points","","Plot a 2D scatter-plot with a point standing in for each data point\n# Arguments\n* `x` - Iterator for the x values\n* `y` - Iterator for the y values\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `PointSymbol` - Sets symbol for each point\n    * `PointSize` - Sets the size of each point\n    * `Color` - Sets the color",14],[10,"lines_points","","A combination of lines and points methods (drawn in that order).\n# Arguments\n* `x` - Iterator for the x values\n* `y` - Iterator for the y values\n* `options` - Array of PlotOption controlling the appearance of the plot element",14],[10,"x_error_lines","","Plot a 2D scatter-plot with a point standing in for each data point and lines connecting each data point.\nAdditionally, error bars are attached to each data point in the X direction.\n# Arguments\n* `x` - Iterator for the x values\n* `y` - Iterator for the y valuess\n* `x_error` - Iterator for the error associated with the x value\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `PointSymbol` - Sets symbol for each point\n    * `PointSize` - Sets the size of each point\n    * `LineWidth` - Sets the width of the line\n    * `LineStyle` - Sets the style of the line\n    * `Color` - Sets the color",14],[10,"y_error_lines","","Plot a 2D scatter-plot with a point standing in for each data point and lines connecting each data point.\nAdditionally, error bars are attached to each data point in the Y direction.\n# Arguments\n* `x` - Iterator for the x values\n* `y` - Iterator for the y values\n* `y_error` - Iterator for the error associated with the y values\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `PointSymbol` - Sets symbol for each point\n    * `PointSize` - Sets the size of each point\n    * `LineWidth` - Sets the width of the line\n    * `LineStyle` - Sets the style of the line\n    * `Color` - Sets the color",14],[10,"fill_between","","Plot a 2D scatter-plot of two curves (bound by `y_lo` and `y_hi`) with a filled region between them.\n`FillRegion` plot option can be used to control what happens when the curves intersect. If set to Above, then the `y_lo < y_hi` region is filled.\nIf set to Below, then the `y_lo > y_hi` region is filled. Otherwise both regions are filled.\n# Arguments\n* `x` - Iterator for the x values\n* `y_lo` - Iterator for the bottom y values\n* `y_hi` - Iterator for the top y values\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `FillRegion` - Specifies the region between the two curves to fill\n    * `Color` - Sets the color of the filled region\n    * `FillAlpha` - Sets the transparency of the filled region",14],[10,"boxes","","Plot a 2D scatter-plot using boxes of automatic width. Box widths are set so that there are no gaps between successive boxes (i.e. each box may have a different width).\nBoxes start at the x-axis and go towards the y value of the datapoint.\n# Arguments\n* `x` - Iterator for the x values (center of the box)\n* `y` - Iterator for the y values\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `LineWidth` - Sets the width of the border\n    * `LineStyle` - Sets the style of the border\n    * `BorderColor` - Sets the color of the border\n    * `Color` - Sets the color of the box fill\n    * `FillAlpha` - Sets the transparency of the box fill",14],[10,"boxes_set_width","","Plot a 2D scatter-plot using boxes of set (per box) width.\nBoxes start at the x-axis and go towards the y value of the datapoint.\n# Arguments\n* `x` - Iterator for the x values (center of the box)\n* `y` - Iterator for the y values\n* `w` - Iterator for the box width values\n* `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:\n    * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).\n    * `LineWidth` - Sets the width of the border\n    * `LineStyle` - Sets the style of the border\n    * `BorderColor` - Sets the color of the border\n    * `Color` - Sets the color of the box fill\n    * `FillAlpha` - Sets the transparency of the box fill",14],[10,"image","","Draws an image from a rectangular array of data by connecting the individual datapoints with polygons.",14],[10,"surface","","Draws a 3D surface from a rectangular array of data by connecting the individual datapoints with polygons.",15],[10,"set_view","","Sets the 3D view.",15],[10,"set_view_map","","Sets the view to be a map. Useful for images and contour plots.",15],[10,"set_z_label","","Set the label for the Z axis",15],[10,"set_z_ticks","","Like `set_x_ticks` but for the Z axis.",15],[10,"set_z_ticks_custom","","Like `set_x_ticks_custom` but for the the Y axis.",15],[10,"set_z_range","","Set the range of values for the Z axis",15],[10,"set_z_log","","Sets the Z axis be logarithmic. Note that the range must be non-negative for this to be valid.",15],[10,"show_contours","","Show contours (lines of equal Z value) at automatically determined levels.",15],[10,"show_contours_custom","","Show contours (lines of equal Z value) at specific levels.",15],[10,"write_data","std::io::mem","",16],[10,"new","gnuplot","Creates a new figure",17],[10,"set_terminal","","Sets the terminal for gnuplot to use, as well as the file to output the figure to.\nTerminals that spawn a GUI don't need an output file, so pass an empty string for those.",17],[10,"axes2d","","Creates a set of 2D axes",17],[10,"axes3d","","Creates a set of 3D axes",17],[10,"show","","Launch a gnuplot process, if it hasn't been spawned already by a call to\nthis function, and display the figure on it.",17],[10,"clear_axes","","Clears all axes on this figure.",17],[10,"echo","","Echo the commands that if piped to a gnuplot process would display the figure\n# Arguments\n* `writer` - A function pointer that will be called multiple times with the command text and data",17],[10,"echo_to_file","","Save to a file the the commands that if piped to a gnuplot process would display the figure\n# Arguments\n* `filename` - Name of the file",17],[10,"to_int","","",4],[10,"map","","Same as `Option::map`",6],[10,"fmt","","",0],[18,"GRAY","","A gray palette"],[18,"COLOR","","Default Gnuplot palette"],[18,"RAINBOW","","Classic rainbow palette with terrible perceptual properties"],[18,"HOT","","A black body palette"],[18,"HELIX","","A nice default for a cube helix"],[6,"DataType","",""],[9,"get","","",18],[6,"AxesCommon","",""],[10,"set_pos_grid","","Set the position of the axes on the figure using grid coordinates.\n# Arguments\n* `nrow` - Number of rows in the grid. Must be greater than 0.\n* `ncol` - Number of columns in the grid. Must be greater than 0.\n* `pos` - Which grid cell to place this axes in, counting from top-left corner,\n          going left and then down, starting at 0.",19],[10,"set_pos","","Set the position of the axes on the figure using screen coordinates.\nThe coordinates refer to the bottom-left corner of the axes\n# Arguments\n* `x` - X position. Ranges from 0 to 1\n* `y` - Y position. Ranges from 0 to 1",19],[10,"set_size","","Set the size of the axes\n# Arguments\n* `w` - Width. Ranges from 0 to 1\n* `h` - Height. Ranges from 0 to 1",19],[10,"set_aspect_ratio","","Set the aspect ratio of the axes\n# Arguments\n* `ratio` - The aspect ratio. Set to Auto to return the ratio to default",19],[10,"set_x_label","","Set the label for the X axis\n# Arguments\n* `text` - Text of the label. Pass an empty string to hide the label\n* `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label",19],[10,"set_y_label","","Like `set_x_label`, but for the Y axis",19],[10,"set_cb_label","","Like `set_x_label`, but for the color bar",19],[10,"set_title","","Set the title for the axes\n# Arguments\n* `text` - Text of the title. Pass an empty string to hide the title\n* `options` - Array of LabelOption controlling the appearance of the title. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label",19],[10,"label","","Adds a label to the plot, with an optional marker.\n# Arguments\n* `text` - Text of the label\n* `x` - X coordinate of the label\n* `y` - Y coordinate of the label\n* `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label\n     * `MarkerSymbol` - Specifies the symbol for the marker. Omit to hide the marker\n     * `MarkerSize` - Specifies the size for the marker\n     * `MarkerColor` - Specifies the color for the marker",19],[10,"set_x_ticks","","Sets the properties of the ticks on the X axis.",19],[10,"set_y_ticks","","Like `set_x_ticks` but for the Y axis.",19],[10,"set_cb_ticks","","Like `set_x_ticks` but for the color bar axis.",19],[10,"set_x_ticks_custom","","Sets ticks on the X axis with specified labels at specified positions.",19],[10,"set_y_ticks_custom","","Like `set_x_ticks_custom` but for the the Y axis.",19],[10,"set_cb_ticks_custom","","Like `set_x_ticks_custom` but for the the color bar axis.",19],[10,"set_x_range","","Set the range of values for the X axis.",19],[10,"set_y_range","","Set the range of values for the Y axis.",19],[10,"set_cb_range","","Set the range of values for the color bar axis.",19],[10,"set_x_log","","Sets the X axis be logarithmic. Note that the range must be non-negative for this to be valid.",19],[10,"set_y_log","","Sets the Y axis be logarithmic. Note that the range must be non-negative for this to be valid.",19],[10,"set_cb_log","","Sets the color bar axis be logarithmic. Note that the range must be non-negative for this to be valid.",19],[10,"set_palette","","Sets the palette used for 3D surface and image plots",19],[10,"set_custom_palette","","Sets a custom palette used for 3D surface and image plots. A custom palette\nis specified by a sequence of 4-tuples (with at least one element). The first\nelement is the grayscale value that is mapped to the remaining three elements\nwhich specify the red, green and blue components of the color.\nThe grayscale values must be non-decreasing. All values must range from 0 to 1.",19],[10,"fmt","","",0],[10,"new","","Creates a new figure",17],[10,"set_terminal","","Sets the terminal for gnuplot to use, as well as the file to output the figure to.\nTerminals that spawn a GUI don't need an output file, so pass an empty string for those.",17],[10,"axes2d","","Creates a set of 2D axes",17],[10,"axes3d","","Creates a set of 3D axes",17],[10,"show","","Launch a gnuplot process, if it hasn't been spawned already by a call to\nthis function, and display the figure on it.",17],[10,"clear_axes","","Clears all axes on this figure.",17],[10,"echo","","Echo the commands that if piped to a gnuplot process would display the figure\n# Arguments\n* `writer` - A function pointer that will be called multiple times with the command text and data",17],[10,"echo_to_file","","Save to a file the the commands that if piped to a gnuplot process would display the figure\n# Arguments\n* `filename` - Name of the file",17],[10,"to_int","","",4],[10,"map","","Same as `Option::map`",6],[10,"set_pos_grid","","Set the position of the axes on the figure using grid coordinates.\n# Arguments\n* `nrow` - Number of rows in the grid. Must be greater than 0.\n* `ncol` - Number of columns in the grid. Must be greater than 0.\n* `pos` - Which grid cell to place this axes in, counting from top-left corner,\n          going left and then down, starting at 0.",19],[10,"set_pos","","Set the position of the axes on the figure using screen coordinates.\nThe coordinates refer to the bottom-left corner of the axes\n# Arguments\n* `x` - X position. Ranges from 0 to 1\n* `y` - Y position. Ranges from 0 to 1",19],[10,"set_size","","Set the size of the axes\n# Arguments\n* `w` - Width. Ranges from 0 to 1\n* `h` - Height. Ranges from 0 to 1",19],[10,"set_aspect_ratio","","Set the aspect ratio of the axes\n# Arguments\n* `ratio` - The aspect ratio. Set to Auto to return the ratio to default",19],[10,"set_x_label","","Set the label for the X axis\n# Arguments\n* `text` - Text of the label. Pass an empty string to hide the label\n* `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label",19],[10,"set_y_label","","Like `set_x_label`, but for the Y axis",19],[10,"set_cb_label","","Like `set_x_label`, but for the color bar",19],[10,"set_title","","Set the title for the axes\n# Arguments\n* `text` - Text of the title. Pass an empty string to hide the title\n* `options` - Array of LabelOption controlling the appearance of the title. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label",19],[10,"label","","Adds a label to the plot, with an optional marker.\n# Arguments\n* `text` - Text of the label\n* `x` - X coordinate of the label\n* `y` - Y coordinate of the label\n* `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label\n     * `MarkerSymbol` - Specifies the symbol for the marker. Omit to hide the marker\n     * `MarkerSize` - Specifies the size for the marker\n     * `MarkerColor` - Specifies the color for the marker",19],[10,"set_x_ticks","","Sets the properties of the ticks on the X axis.",19],[10,"set_y_ticks","","Like `set_x_ticks` but for the Y axis.",19],[10,"set_cb_ticks","","Like `set_x_ticks` but for the color bar axis.",19],[10,"set_x_ticks_custom","","Sets ticks on the X axis with specified labels at specified positions.",19],[10,"set_y_ticks_custom","","Like `set_x_ticks_custom` but for the the Y axis.",19],[10,"set_cb_ticks_custom","","Like `set_x_ticks_custom` but for the the color bar axis.",19],[10,"set_x_range","","Set the range of values for the X axis.",19],[10,"set_y_range","","Set the range of values for the Y axis.",19],[10,"set_cb_range","","Set the range of values for the color bar axis.",19],[10,"set_x_log","","Sets the X axis be logarithmic. Note that the range must be non-negative for this to be valid.",19],[10,"set_y_log","","Sets the Y axis be logarithmic. Note that the range must be non-negative for this to be valid.",19],[10,"set_cb_log","","Sets the color bar axis be logarithmic. Note that the range must be non-negative for this to be valid.",19],[10,"set_palette","","Sets the palette used for 3D surface and image plots",19],[10,"set_custom_palette","","Sets a custom palette used for 3D surface and image plots. A custom palette\nis specified by a sequence of 4-tuples (with at least one element). The first\nelement is the grayscale value that is mapped to the remaining three elements\nwhich specify the red, green and blue components of the color.\nThe grayscale values must be non-decreasing. All values must range from 0 to 1.",19]],"paths":[[2,"Coordinate"],[2,"PlotOption"],[2,"FillRegionType"],[2,"AlignType"],[2,"DashType"],[2,"ArrowheadType"],[2,"AutoOption"],[2,"LabelOption"],[2,"TickOption"],[2,"Tick"],[2,"BorderLocation2D"],[2,"LegendOption"],[2,"ContourStyle"],[2,"PaletteType"],[1,"Axes2D"],[1,"Axes3D"],[1,"MemWriter"],[1,"Figure"],[6,"DataType"],[6,"AxesCommon"]]};
initSearch(searchIndex);
