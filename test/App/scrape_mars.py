from bs4 import BeautifulSoup
import pymongo
from splinter import Browser
import requests
import time
import pandas as pd

def scrape():
    
    executable_path = {'executable_path': 'C:/Program Files (x86)/Google/Chrome/Application/chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)

    url = "https://mars.nasa.gov/news/"
    browser.visit(url)

    html_code = browser.html
    soup = BeautifulSoup(html_code, "html.parser")

    news_title = soup.find('div', class_="bottom_gradient").text
    news_p = soup.find('div', class_="rollover_description_inner").text

    #Pull featured image
    featured_image_url = "https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars"
    browser.visit(featured_image_url)

    #Navigate to image link
    browser.click_link_by_partial_text('FULL IMAGE')
    time.sleep(20)
    browser.click_link_by_partial_text('more info')

    #Retrieve html code
    image_html = browser.html

    #Parse
    soup = BeautifulSoup(image_html, "html.parser")

    #Find path
    image_path = soup.find('figure', class_='lede').a['href']
    featured_image_url = "https://www.jpl.nasa.gov/" + image_path

    #Navigate to weather url
    mars_weather_url = "https://twitter.com/marswxreport?lang=en"
    browser.visit(mars_weather_url)
    mars_weather_html = browser.html

    #get lastest tweet
    soup = BeautifulSoup(mars_weather_html, 'html.parser')
    mars_weather = soup.find('p', class_="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text").text

    #Navigate to Mars facts url
    mars_facts_url = "https://space-facts.com/mars/"
    browser.visit(mars_facts_url)

    #get html
    mars_facts_html = browser.html
    soup = BeautifulSoup(mars_facts_html, 'html.parser')

    #get the entire table
    table_data = soup.find('table', class_="tablepress tablepress-id-mars")

    #find all instances of table row
    table_all = table_data.find_all('tr')

    #set up lists to hold td elements which alternate between label and value
    labels = []
    values = []

    #for each tr element append the first td element to labels and the second to values
    for tr in table_all:
        td_elements = tr.find_all('td')
        labels.append(td_elements[0].text)
        values.append(td_elements[1].text)
            
    #Create data frame
    mars_df = pd.DataFrame({
        "Label": labels,
        "Values": values
    })


    # get html code for DataFrame
    fact_table = mars_facts_df.to_html(header = False, index = False)
    fact_table


    ### Hemisphere Images
    # new url
    usgs_url = "https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"

    browser.visit(usgs_url)

    usgs_html = browser.html

    soup = BeautifulSoup(usgs_html, "html.parser")

    # gets class holding hemisphere picture
    returns = soup.find('div', class_="collapsible results")
    hemispheres = returns.find_all('a')

    #setup list to hold dictionaries
    hemisphere_image_urls =[]

    for a in hemispheres:
        #get title and link from main page
        title = a.h3.text
        link = "https://astrogeology.usgs.gov" + a['href']
        
        #follow link from each page
        browser.visit(link)
        time.sleep(3)
        
        #get image links
        image_page = browser.html
        results = BeautifulSoup(image_page, 'html.parser')
        img_link = results.find('div', class_='downloads').find('li').a['href']
        
        # create image dictionary for each image and title
        image_dict = {}
        image_dict['title'] = title
        image_dict['img_url'] = img_link
        
        hemisphere_image_urls.append(image_dict)
        
    #print(hemisphere_image_urls)

    mars_web = {
        "id": 1,
        "news_title": news_title,
        "news_p": news_p,
        "featured_image_url": featured_image_url,
        "mars_weather": mars_weather,
        "fact_table": fact_table,
        "hemisphere_images": hemisphere_image_urls
    }

    return mars_web