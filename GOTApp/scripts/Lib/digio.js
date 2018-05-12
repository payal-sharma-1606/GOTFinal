!function(){function A(A){this.message=A,this.name="DigioException"}String.prototype.format=function(A){var e=this;return e.replace(String.prototype.format.regex,function(e){var o,i=parseInt(e.substring(1,e.length-1));return o=i>=0?A[i]:-1===i?"{":-2===i?"}":""})},String.prototype.format.regex=new RegExp("{-?[0-9]+}","g");var e=window.Digio=function(e){if(void 0!=e.callback&&(this.callback=e.callback),void 0!=e.environment){if("stage"!=e.environment&&"production"!=e.environment)throw new A("Environment value should be either stage or production");this.environment=e.environment}void 0!=e.logo&&(this.logo=e.logo)};e.prototype={URL:{stage:"https://ext.digio.in",production:"https://app.digio.in"},environment:"stage",resultCaptured:!1,result:null,documentId:null,txnId:null,popup:null,logo:null,callback:function(A){},getLoadingHtml:function(A){var e='<div style="text-align:center"><div class="company-logo" style="background:#fff;height: 350px;padding: 30px; box-shadow: 0 0 2px rgba(0,0,0,.14),0 3px 6px rgba(0,0,0,.28);"><div class="company-image" style="max-height: 200px;height:auto; margin-bottom:30px;"><img style="max-height: 80px; max-width:200px; margin-bottom:30px;" src={0} id="companyLogo"></div><div> <img style="max-height: 30px;" src="data:image/gif;base64,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"/><p style="font-size: 18px;color:#0261B0;margin-top:40px; ">Preparing your documents for signing</p></div></div><div style="padding: 100px;"><img style="width:45px;height:45px;" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCARXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAKgAgAEAAAAAQAAAHigAwAEAAAAAQAAAHgAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iAqBJQ0NfUFJPRklMRQABAQAAApBsY21zBDAAAG1udHJSR0IgWFlaIAfgAAcABAAIAAEAKGFjc3BBUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC2Rlc2MAAAEIAAAAOGNwcnQAAAFAAAAATnd0cHQAAAGQAAAAFGNoYWQAAAGkAAAALHJYWVoAAAHQAAAAFGJYWVoAAAHkAAAAFGdYWVoAAAH4AAAAFHJUUkMAAAIMAAAAIGdUUkMAAAIsAAAAIGJUUkMAAAJMAAAAIGNocm0AAAJsAAAAJG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAHAAAABwAcwBSAEcAQgAgAGIAdQBpAGwAdAAtAGkAbgAAbWx1YwAAAAAAAAABAAAADGVuVVMAAAAyAAAAHABOAG8AIABjAG8AcAB5AHIAaQBnAGgAdAAsACAAdQBzAGUAIABmAHIAZQBlAGwAeQAAAABYWVogAAAAAAAA9tYAAQAAAADTLXNmMzIAAAAAAAEMSgAABeP///MqAAAHmwAA/Yf///ui///9owAAA9gAAMCUWFlaIAAAAAAAAG+UAAA47gAAA5BYWVogAAAAAAAAJJ0AAA+DAAC2vlhZWiAAAAAAAABipQAAt5AAABjecGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltwYXJhAAAAAAADAAAAAmZmAADypwAADVkAABPQAAAKW3BhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbY2hybQAAAAAAAwAAAACj1wAAVHsAAEzNAACZmgAAJmYAAA9c/8IAEQgAeAB4AwESAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAMCBAEFAAYHCAkKC//EAMMQAAEDAwIEAwQGBAcGBAgGcwECAAMRBBIhBTETIhAGQVEyFGFxIweBIJFCFaFSM7EkYjAWwXLRQ5I0ggjhU0AlYxc18JNzolBEsoPxJlQ2ZJR0wmDShKMYcOInRTdls1V1pJXDhfLTRnaA40dWZrQJChkaKCkqODk6SElKV1hZWmdoaWp3eHl6hoeIiYqQlpeYmZqgpaanqKmqsLW2t7i5usDExcbHyMnK0NTV1tfY2drg5OXm5+jp6vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAQIAAwQFBgcICQoL/8QAwxEAAgIBAwMDAgMFAgUCBASHAQACEQMQEiEEIDFBEwUwIjJRFEAGMyNhQhVxUjSBUCSRoUOxFgdiNVPw0SVgwUThcvEXgmM2cCZFVJInotIICQoYGRooKSo3ODk6RkdISUpVVldYWVpkZWZnaGlqc3R1dnd4eXqAg4SFhoeIiYqQk5SVlpeYmZqgo6SlpqeoqaqwsrO0tba3uLm6wMLDxMXGx8jJytDT1NXW19jZ2uDi4+Tl5ufo6ery8/T19vf4+fr/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2gAMAwEAAhEDEQAAAfTvDdco53s5M76eYdjtk17xX4nuGXn3TKuvIOoVJ2QbhO9RvPLcihd5Pa8/zdX0l4ZyddCX0/NI76OZ32S6RxmuS0dHNnQLV5TPMu1bVtXV8pz9D+8w6OBtHz59xz7mL1c3Znw6OXD6HnZ4Cz7DHavd5bGnPSjc9HNQO98GnX47chcaJXvgZdZaPB478M52wI5N0LZHp7PfHt6Dzu+jqvT831fjvO9GyxVVkmhaCFHU+l5vq3G+f6NrBE6HKtO/hsnvF28026ObsXGW/JR3ef6Z5nxdvecYb1fyDN+24nbHteKN6cz4O8HO9PP6PU8XZWcr6Hn9VxDI8uzV9Fm7QAvQePJddc6cburk2ratq2p8xR+24nHa2qdcttM90+HQflufoqwNm3vvP9Csa9nH01Hrn6HxoZfWunI9S+fLPNc2eZM4Vm/S56811yO3oM9HnNAZojpuuTr9y6Dzu/5o9i6MfCA9vE+Fti8DrlYNHXq+XRuz40N1fJkPa9lUFTActECx2uPYOPtt+i5t/wD/2gAIAQEAAQUC3XcINttdy37cb5eqiEsJaUEmHar+UfoLc3LtG4RiSJSFFLKXQpO3b7uVivaNxg3K18VXqr7d0paUuGJci49rtrNB3dMAm3K/lfvE7iv72Mo3qZafctu3B3lrNbSqS1Jfhm9VY7vqtaQ7G1lup5biDaULWpa/vWm4R3EW7bfJZSqDUKFAcSCpVyobRZdrWCS5uLy2ltJ/u7TcR3EN9bSWtwsNAfh6JEQnkXNN28O/7Wd+hXceIdysJ7CTvbQruJ9y2+fb17h/rhs6w0Pcv4rsztLWe6k/o7uGO2WlxZ75vhlHiPe/f/ebW2nupP6PbhirbbxF0be6s9x3z9ICfw4sG6uEGOS2RzJfE68t2gjVNNuFxHsln+kb/Pw/uhvXu3/GVeKkKl3i/uI9jsjuV+V+Ht1N6d4/4yjxj/j+3ycq+8Rx8vd9s/x7xB/tY2RQTu3i5Khub8MpUreN1/4yrdlBPijxclQ3N+GkqVvG8f8AGUeMf8fi/eeLP9q9ovlzeJkY7uDQwXFpvVp/Rm4z25Fhtsu6/wDGVeLz/rnDPbbvanw1cZ7ZDY7bLu//ABlHjH/HrBHMvfEq894Q92/jO19veJ8XXWtXNt6dx2lUe5oOw2BsRf3Bubwmr8Nxj365kMsqC9gWm4hlQqOT7tnd3FpIPEl7jf7jdXve7/1u2NZaC4JFRrv0J3S0/mdntYwncruS8ulliqVJL229lsri5sob+Iih+9YbaOVu+4m7UotRfiWzVY7wlTSp2txLBKL6w3ES7LOUy2tzEXHDNI4NlvVjmbVtz3C+uLyVSmpT8PWir7d982uHdbXctqvtuWlTCmFOKZcaod83KN/0ivnJv+5KFxdTTkqZU1Ke37XfbirYtqh2u2//2gAIAQMRAT8BnkEWXUFlld5Ph9qfrw1jHmTvw/1d+H+rvw/1f5R8Sfbkfwm25R8scrHqCwyCTPJaZEpxxgLyH/My6qXiHCST5YxMjQZwlA1Lth1MxweQgY834OC8wNFhNkUV08N3qWUjI2WMJS8B/SZv8V6THKOYbg9Vt9/7nqYQgaiCGMJS8B/SZvyfZyXVMce2dTD1EIwP2ghxSHUR2S8vMTTj5mLeuP8AMengJzAL1eQ4fsx8Puzu7ej6nJKW2XL1P+UD/CHqoCfUCJeryHD9mPh96fm3ouoySltPL1P+UD/M/JfiDhltmC9WKyIO029ZDd/MHq3SOtJFZBb7vTf4jHrhD8MeHL1G/Jvp6jqPdluDczjBI3B/k/7tl6ckf2doeoziWbcHqeo943T0mPdO3NP3J2zg4suz7ZeHL039rHyO6OSUPBf1eb82eac/xHTD08snPoyyAR2Y2MXLhpljRugbiynCf44/6yenifwST0uUeicch6aCEj4R02U+iOmr8Uke1DwLZGeTyxxuPDek8UWUQmITEPh97IPV/UZPzfeyH1bJ8oiERDGIYY401T//2gAIAQIRAT8BhiMmOAMcT7YD7kPTn/A/zD4i7M39H28v5j/eP87sy/0ayD+ymcR+IU7RLkMsTLAGeLawxsYIyGfGL/XR00fM+UCmUhEWWMxMWO2XTQPI4KTkxfj5H5tCQsM4MYp/1RPYPwhAAFBlOMfJf1WH/GeqnGeCW0vSEjp+HppzlG5EH/AylGPl/VYf8Z92FXaZ7oboF6acpj7iD/gcsf053x8eqRfLI1Al6EVhDnmYYzIPR4o5h7mTkvtw/J63pscYb48PTf5Kf870czDp5SD0eKOf+Zk5L7UPyet6bHGG8cPS/wCSn/O/G/gLljugQ9IbwhHIp6OW28R8jQ9GAd2M0+31H+P/ALBn0JyD75WXH0+zF7dvTdP7MdttYxkIB2H/AGD/ADv93A9SAeN26T0+AxwbC9N0/sRq3qsuzH/UuKHt4xFjNyY9/wB0eCHH1HO2fB7pQjP8Qf0mH/FYYoQ/CNMueOPj1YwJl7mTz/tGcnFmtjkTtmKkiM4fgl/rvvyH4oo6nEfVE4nwdDIBPUYh/af1F/hiSn3Z+TX+BiIY/DLI5M1N048kmMiiRRIt2+1A/wBl9jH+T7WMf2Xx4TIpkWUi5MsrSbf/2gAIAQEABj8CM85+CUjios/TKgi/0uI0/XxdVEk/E96U1dUWkp+yn8L/AMVP+EHVVpL9mrxWkpPoRTvUEg/Bik6po/NEpr+vi+dAfgpJ4pLk1+ihPLR/X+v+DuEISVKPABiTdZ8SeEMeqi8Nus4rdP7RFVPru5fsNP4H+/l/3IX0XUw/yq/wvC8hhukfyk0L/iMvu8/+ky8D8izFPGUK+PeI1+jkPLkHwP8AosrPEmp7JhhTkos21jSS54Sz+nwDK1qKlHiT5/fFnun0kX5ZfzIdD1xq1QscFdqjsEgVJ4B+5xH+Nyisyx+UendMEVM1cKlmGYALHoa/e/Rd4fol/ulfsKa4JR1JPebcph0W46fir/b/AIWqWQ1Wo1Pe3+Z/gLMEftLxA/BpRNichUFJ+4iGP2lmgaEzYnIVBSXHfcZ4Po5viPXvZ2fBS/ppP9v/AG+HbCCMrPw8nX6H5Z/6DtU3ERRVenodC/oDSXowPxaRfqBXjpThR8uCNS1fB1+h+Wf+g0Wy4cVrNE1Oh+1oh9i4yGND5loG4KBXj004UclpJ+7uYyk/P/bq1IVxSaFoR+0oD9bWnyjSlLREj2lmgcdpaAc5QqVH+F5++T1/tP3e5oZk9SVU9r/Rcf8AuyJwxo9pUYA/FotbVIMyxUqP8Lz98mr/AGn7tc0MqepKqe1/ouL+3E4v91f1uCQeUg/hdwPVWX4h2/8Au1P8Luf7X9QdsVcOYwo8FRinaIp/KCT8qOP/AHZE7Iq4UH8JYUeCoxTtDj+WpPyo4v7cTi/3V/W0/MNf9hLjX+yoH9bkV5LCVfq/0HUNNtdq5dyngfX4j+4/8Zix9cS02ccnMuZeJ8/9Bx/7sjcZB/vQ/habW++iuU8D6/Ef3HpcRY+tC02qZeZdS8fX/QDj/txuL/df9bhj/akT/C7j4HH9XayvuJCeVJ8++POlp6Zn7ltPalJnjjCFD1p5fN8opvB8Opr3C++ionQHy+JctxwzVV6s3C/3dugrJ/2/ta5TxWSrtPtcpoJhlGfRQakLFFJNCPvZwSFB8/QuhigJ9aF/TydI4JGg7ptjpPd9UnwT6d0rQrFSTUF/pG3T9MjS4jH8P80dwu9LaHh/LV6Nc8nFXl6D07FJ4g07CaI/MeSgzebZx/vlv5p+Tofv++X6uRaj19pfyaUITyrePSOMeXeZNOiQ8xHyP+j3EsKyhY8w6bjHyZv9Pi/rfMs5IruP1QrV/SQSp+aD2+jikX8kl5SpTbo/akLrH/H7geZ9gPOddfQeQ7wx06EqzX8g+VIcJE6xyfslnnwqw/0xIqk/7fx+5lGtSD6pNH/jJV/bAL/vH+4/9F0E4R/ZQA6zSrk/tGv3KW8Csf21aJH2vBHXKr95JTj/AKD/AP/EADMQAQADAAICAgICAwEBAAACCwERACExQVFhcYGRobHB8NEQ4fEgMEBQYHCAkKCwwNDg/9oACAEBAAE/IWrf6RH+ZdZDiC++T9fFhrFyor9v/dElK4A1+rADeX/UuX+H+asgjxP4N9kFS/D/AN9BMOFQljELqGPXB+/ijmCfpk/77omTQfxz+x+n/Yd/8ClWwjNKvtJ/X5q72Ir5/wAb+lMP+FVZf8X3ZV8o/wCy+Ufn7jj9V5W3Cf4HqfiiwvXY8j2f9KZ8P0JMfqH5bOir+ZZf5/5/p7sO18FX2LJJl/j/AOtbRMol+T/+IYo1dHd+Z7Pf5mi3B9Mf7/5oCImif8UBIAOV8WDqPy/UX/O3/pqJUEBhPP1QOCKQN9//AIlErneeqPX/AM7sRCM+Hwnp/wCpJmz/ADmH7qUTb+3/AKon8Vj1EpjBTqzUoGOf/wAAVjtGCpTNKkzn+SnuDJ+D9h+3/gTvjuzPkKHt4Py/8Qb/AJ6fJ6p0F9tJE0k74N4byTkScIgsW28shL17L5A0dPl6o3BfbNPQmno1zh1TkgSpY4No0jgZCXr4u2QE+BJ+q5Zv8wx/V/8Assg/ugDwX8T/AHRAkPzLXb4QT8vyvX/lWn/R/jj9V2MnwA/gX/AeqY0m/tdg1UD8vy+D/Vnr4cD8cWCJ3hB/S/4jz/yjKIm/WH9NIcgAfR/c2O3+Jv6WybBAfkQ/aUWnb/Cz/J+f+cdn4Ofyl/yHqtlA1+R/lKe3NfhZ/k/P/H/h+XD+Uv8AiPP/ACksucvyWP5n5hv/AMF8NiLhv3CkBERkTkp++7wr2cz3TgF+Y/E/3Q8o6nAu+HOXmf45YEAmg8aqdRhbFR38yc1nP8hP4/8AaSbmQ4AvBRj6/wCe7vKUTA/Sf1ZYOGPoVnDxZnajen/o/n/oMH1X/NFGTPiqZKz5mqWq/LZey7jLl4HVkhuIzP1lXQlStDz7HxUYMgHYcB+Aqci/LeK6W4GIK5ySfbP/AAPjIL/FwP02TPnhJ/8AikTnA35Duk+II/U1M1SRw/X+/wDuESouz4/gfb/2VKAA5EsJwAZudfP+vj/8rceTLq4Hnf393ANMDnV/wwBhSPYw/wDPWXw/0Glp5915/wBPx4qICIwicP8A+NMjp6egc/3480OPgMPL7/j/AJz8WYEavSkp9S/X/a4VMN/mUYmOIMfh/wDbLydAH4P+6yI3/A8X7K7Hym/q+fSjI+j/AMv10ZP68/tsqrOPPjP+ka0ifw8/tg/N3oEAl/sHsoQ48OF89fh/+Av340r9USIPir5Rvm0SF/kTNk5vaPxxff8A9wqo+Tf7z6mr2wqQX49Dov8A/9oADAMBAAIRAxEAABD93EqosNY0BKmKIQIJvgrDlTdTU0211ajwgo+kY3qom/ukkpbp9g4iAiorANGpWeUFIFam5zSu1+RCO5v/xAAzEQEBAQADAAECBQUBAQABAQkBABEhMRBBUWEgcfCRgaGx0cHh8TBAUGBwgJCgsMDQ4P/aAAgBAxEBPxD89vis66stzlDmsH3c/p3Py/8AI/8AJH6v2P8AN9v9x/iH44fs/wCI+QPzP8bHUvyPP7dy3Ck46N9b5rrVncLtS+jv/kIwz9u/37ldWx49WxBj+AU6hf4R5v6BXr+GXI4+KrhALPpfY+v5yBOZ3Gb7i0QP/GKwFOOu4Ag+8rjN9zfN9/KxndnB3Fv5i+MHp+v2Y5CAL5J/edY/HH9P+y84bZ4Y+1vyd/OJ8T+1+mfWQTBD+7HgY+0q8u/nC+N/a/rf7r+gmAjRPnJBEGT47fn+v7QlpESn79/vfJr95wDPl9f3/wCQnwYj+1hhnGQeGX8n24/xOO/3G5IA/Xv92CcwJ/SMhjJSXRy/kQKfDChr7LgU/uH5yZ+FrWLizd2Q+cg4Ha9Xx6+X6/r6T2njrye4y+Dn6/4df2uVB/Pj/n9bmOf5c/2uyVjcgNutd2iP6v8AS+un1ev2/wCynP8Ax+3m/fqQeGQLn4BBz0Y6D/e+7n5n957pfwCDMcgcC//aAAgBAhEBPxDmG+njDMgGvEa5tfZv9ev6x9B/ND+2w30fu/4v/EYn9X7n+2e0H8n/ACF2l+Y4/c0/rBtdI0zL6efnAdEAayeGn1dfx9f7TnTf36/g6gGBLlwLaOn4Wf5A4f8Av83Uvsjk/M/2WMujD5aVPqfd+n5fr6RoMCB0g+99p+8yA8fH5ltWDz31/Mi5ZBdYH3n6T94dk4fOxqL8/iSth8fn0+n3IhjpkI7B/tCk+df6/wDIFdQlSc2c/H8XFmc/Imga+3T/ABf0UAjUX+xAK8mY/H8fogTM5+RMR0fTp+2X9FP67/UCPSP9pdnxp+3/ALYZdMx+zfuP6/rJs9S36dft+i+PH7Jgr8H0P4/7b/Ju859bTWtd6tMBf5fv/nIEcYfXD/MVpp0HR/BdE1H+Ntzm122s+gH3bSOz+/lpE+E/6ftGg/7L+T+IzAfzl3cXQB+R59ULoO/197+OA+P+vv44+e/NYjS+Yj6cj+Hs/rHdj7nJ/n+kxmT8+P75cgDbdk5d6P33+0/6ow/dyfRj6dv3f9EA57+fl/N8yMLkTkF/AIODme0P2L7H9o6g/YjOIz8AgAgZFrf/2gAIAQEAAT8QeSFkjKob8KrgFco8MAYIF4QVyWRn2GVuVk9or9t4svqvKqdH4Br9FJKvAy/lQsovTJT83M/yc/quv/K+QbBJF5sqQnlVnkRE+qLaIVyJkleYZBPKt0cXMk4YiaDBpUuQcoAw9qgnxTiy8WWQULfhgP8ADuLwcc+PsH4BXjLY5+VIT8tKMwf/ABApQguq62GfHQn4gpB5AJ+UAy+nzS8pWWXc2/YFT4VQM8Sz2H3Dl5svqu9EsZQnJiWQ9HlqvZaeVfsV48rCF5OG5fR2/ASoVbihMdxaY/Q86WZEp7vKa/8A4kQikInpOH5910Kwl8MXMPsHRMR8QOYZ6wByfZnHPlaA4hCIyI+RBvFlLX9MqQAeVQ+6KGejT7IeQ8eRL9QGB4/5NPcRKKYMYrkUhWCTgTn/AOEUZGEs0gAj16eE8HAvSBqNqCB59I0/HI3my8WUiL0vhg9gA9jxX3SQ4psejAOgP+k3t95uGvz2Jqr0AL9VCEqQkA0ERT8//gNb49iFlegBX4sxWhxIBKCJ+yS5aDGNeJ8/oFY5EokcDfh3esxSlSU+Mfh/yA/hIAHhaAfLvQ1crEmUnxOKI6uN4NzwTHPqt1TcB2oiRsMiQtgvJcFowAC6cuFzpQhIL2kA9rvU2eSBMvoSQ/dUVYEMQBlYmOfVQdKWEQ8RswyRCzZjQoKoMAAVEzLhY+uA0oX8v0vO3P5Un7ZfdNPhf4Z/VMewf4BuwuA9JIQL6Jl9DXIiPIOB9rA4R4heZhmRH4SyTClgwKnEg0gRkjS/4zzQ52k4QyfWy+hqDYTriAfY5wAeIXkSJ/pIfpUuIJGCZDCQZIkeCG/4Lxv+R72bwefYfsKKGPB0hp6tvee98IQcvA1w9NtgxR9P4H/BcZ1HiTdX+c80VoWrgQKFNRfQxz9P4n/BDYHDwGT9P7v+C8b/AJHvYF3+Uy/dIhCVo/I/qiqwIvpj9DQnCk9Jwfuiw8RhBkR6RBH1deFAImHhQcn+m8wxzCP4qjUvLBwDDCHJXtVqESRyz7pHIIhKHEek5sv3WDkxMBBT9kNFovIs+Kk0okIMeQJAoYFlXtsJJhfTB/sqFCPq+9k91T1J+honjEnzP2tR5BD8ONePgBxxr9P6f86hBPCSWEXGI/q4soFTOo3zndkleRL+bNHIiUf5qm8qMQUeTMnEUnRFZA86eiSj4Yq+IZWcxJ4ANPM6wNzVfBwr2SPc1KVPKP8ANRFNYiQ/TL6s3oUrwtD6mPq8W1PK+g058kD+aqVZXvQn5/JD3/8AieR0IATgfP5HSV3CcH8UX8075AHvOmX2mOo/5nbAavgvEifFKT5JDz4aqqsreLa1Kj9aRPh/PHdOzChSGHyI/PtGv/5JCpBDkYOhCfMDqlMISUBhPgO+1Xu823lsRuEB9I3j2lQgTvsH48PI6diTePOB+oTCOsMeV2bC5AIciOieHf8A8XS8BqvBfEUI+LxA8TEulBGfABEBGLM8DDtefayiSuAate6u/JgPlCnQ+ZfdeDb0sVpDseldiI2CCQ4rxz/sB5LCIGKPton4+lUPqFIfgP7VgYQfCw0QoeP50hQARsWu2ZX7aDBKxN78aIfHzF3XUBB8dfzq9vV5tvNtO3zwgzfwn5nwYnISnZEMnSyTThEEd7LEMjYz34k55ibx7ffYI2yzPlz+VE/c0UQyP5JA/ukJDO26mQXmPzRxPUkYfSYfQVXlLfdffeOQCluqPDgr45pYoDARgN0Ojyqqq//Z"/><p style="font-size: 16px;">Sign documents with Aadhaar</p><span style="font-size: 12px;">Powered by <a href="https://www.digio.in" style="color: #585f69;text-decoration:underline;">www.digio.in</a></span></div></div>'.format([this.logo]);return e},reset:function(){this.result=null,this.popup=null,this.interval=null,this.resultCaptured=!1},receiveMessage:function(A){return console.log(A.data),console.log(this.txnId),console.log(A.data.txn_id),console.log(A.origin),A.data.txn_id==this.txnId&&A.origin==this.URL[this.environment]&&(console.log("success"),this.result=A.data,this.resultCaptured=!0),this.popup.close(),this},init:function(){
window.receiveMessage = function(data) {
			// console.log(event.data);
			// console.log(this.txnId);
			// console.log(event.data.txn_id);
			// console.log(event.origin);
			if((data.txn_id == self.txnId))
			{
				console.log('success');
				self.result = data;
				self.resultCaptured = true;
			}
			self.popup.close();
			return this;
		};
this.reset();var A=.35*screen.width,e=.7*screen.height,o=.33*screen.width,i=.1*screen.height;this.popup=window.open("","_blank","modal=yes,alwaysRaised=yes,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=1,width="+A+",height="+e+",top="+i+", left="+o),this.popup.document.body.style="margin:0;padding:0;color: #585f69;background-color: #f0f0f0;text-align:center;font-family: helvetica;",this.popup.document.body.innerHTML=this.getLoadingHtml(),"null"==this.logo&&this.popup.document.querySelector(".form-group").remove();var t=this;window.addEventListener("message",function(A){t.receiveMessage(A)},!1);var n=window.setInterval(function(){try{if(null==t.popup||t.popup.closed)if(void 0!=n&&window.clearInterval(n),console.log(t),t.resultCaptured)t.callback(t.result);else{var A={digio_doc_id:this.documentId,error_code:"CANCELLED",message:"Signing cancelled"};t.callback(A)}}catch(e){throw e}},1e3)},esign:function(A,e){void 0==this.popup&&this.init(),this.documentId=A;var o=this.URL[this.environment]+"/#/gateway/login";this.txnId=Math.random().toString(36).slice(2);var i=o+"/"+A+"/"+this.txnId+"/"+e;void 0!=this.logo&&(i=i+"?logo="+encodeURIComponent(this.logo)),this.popup.location=i},cancel:function(){void 0!=this.popup&&this.popup.close()}}}();