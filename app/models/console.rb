class Console < ActiveRecord::Base
  belongs_to :user
  has_many :panels
  has_many :toggles, through: :panels
end
