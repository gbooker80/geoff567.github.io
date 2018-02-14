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

    #Get latest weather tweet
    soup = BeautifulSoup(mars_weather_html, 'html.parser')
    mars_weather = soup.find('p', class_="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text").text

    #Navigate to Mars facts url
    mars_facts_url = "https://space-facts.com/mars/"
    browser.visit(mars_facts_url)

    #Retrieve html
    mars_facts_html = browser.html
    soup = BeautifulSoup(mars_facts_html, 'html.parser')

    #Retrieve table
    mars_table = soup.find('table', class_="tablepress tablepress-id-mars")

    #Find table row instances
    mars_table_all = mars_table.find_all('tr')

    #set up lists to hold td elements which alternate between label and value
    labels = []
    values = []

    #for each tr element append the first td element to labels and the second to values
    for tr in mars_table_all:
        td_elements = tr.find_all('td')
        labels.append(td_elements[0].text)
        values.append(td_elements[1].text)
            
    #Create data frame
    mars_df = pd.DataFrame({
        "Label": labels,
        "Values": values
    })


    #Html code for DataFrame
    table_html = mars_df.to_html(header = False, index = False)
    table_html

    #Hemisphere Images
    hemisphere_image_urls = [
    {"title": "Valles Marineris Hemisphere", "img_url": "https://astropedia.astrogeology.usgs.gov/download/Mars/Viking/valles_marineris_enhanced.tif/full.jpg"},
    {"title": "Cerberus Hemisphere", "img_url": "http://astropedia.astrogeology.usgs.gov/download/Mars/Viking/cerberus_enhanced.tif/full.jpg"},
    {"title": "Schiaparelli Hemisphere", "img_url": "http://astropedia.astrogeology.usgs.gov/download/Mars/Viking/schiaparelli_enhanced.tif/full.jpg"},
    {"title": "Syrtis Major Hemisphere", "img_url": "http://astropedia.astrogeology.usgs.gov/download/Mars/Viking/syrtis_major_enhanced.tif/full.jpg"},]
        
    mars = {
        "id": 1,
        "news_title": news_title,
        "news_p": news_p,
        "featured_image_url": featured_image_url,
        "mars_weather": mars_weather,
        "fact_table": table_html,
        "hemisphere_images": hemisphere_image_urls
    }

    return mars